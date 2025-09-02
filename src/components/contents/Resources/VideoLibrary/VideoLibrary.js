import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./../../../Navbar";
import "./VideoLibrary.css";
import HomeFooter from "./../../../HomeFooter/HomeFooter";
import localVideo from "./VideoLibrary_Assests/video.mp4";
import Modal from "./WebinarForm/Webinar";

const VideoLibrary = () => {
  const [showModal, setShowModal] = useState(false);
  const [video, setvideo] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isHovered, setIsHovered] = useState(false);

  const videoRefs = useRef([]);
  const [playingVideos, setPlayingVideos] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

  // Handle window resize for responsive filter
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data from Contentful
  useEffect(() => {
    const query = `
      query($preview: Boolean) {
        resourcesVideoLibraryCollection(preview: $preview, limit: 20) {
          items {
            videoTitle
            videoAssetsCollection {
              items {
                url  
              }
            }
            videoCategories
            videoDescription
            videosCollection {
              items {
                url
              }
            }
          }
        }
       
      }
    `;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ query, variables: { preview: false } }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load data. Please try again later.");
        }

        const { data } = await response.json();
        setVideoData(data.resourcesVideoLibraryCollection.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken]);

  const handleButtonClick = (video) => {
    setvideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    const a = document.createElement("a");
    a.href = localVideo;
    a.download = "video.mp4";
    a.click();
  };

  const handleLoadMore = () => setVisibleCount((prevCount) => prevCount + 8);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(8);
  };

  const filteredVideos = activeFilter === "All"
    ? videoData.flatMap((video) => video.videosCollection.items)
    : videoData.flatMap((video) =>
      video.videoCategories?.includes(activeFilter) ? video.videosCollection.items : []
    );

  const hasMoreToShow = visibleCount < filteredVideos.length;

  const handlePlayClick = (index) => {
    const videoElement = videoRefs.current[index];


    if (!videoElement) return;

    // If there is a different video currently playing, pause it
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      const previousVideo = videoRefs.current[currentPlayingIndex];
      if (previousVideo) previousVideo.pause();
      setPlayingVideos((prev) => ({ ...prev, [currentPlayingIndex]: false }));
    }

    // Toggle play/pause for the clicked video
    if (playingVideos[index]) {
      videoElement.pause();
      setPlayingVideos((prev) => ({ ...prev, [index]: false }));
      setCurrentPlayingIndex(null);
    } else {
      videoElement.play();
      setPlayingVideos((prev) => ({ ...prev, [index]: true }));
      setCurrentPlayingIndex(index);
    }
  };

  if (loading) return <div className="video-loading-spinner"></div>;

  if (error) return <div className="video-error-message">Error: {error}</div>;


  return (
    <div className="video-page-wrapper">
      <div className="video-page-nav">
        <Navbar />
        <Helmet>
          <title>{videoData[0]?.videoTitle || "Video Library"}</title>
          <meta
            name="description"
            content={videoData[0]?.videoDescription || "Video Library Description"}
          />
        </Helmet>
      </div>


      {/* Local Video Section */}
      <div className="webinar_wrapper">
        <div className="webinar">
          <div className="webinar_video--descriptions"><br></br>
            <h1 style={{ fontFamily: "open sans" }}>Webinar</h1>
            {/* <p>
              Gain insights from industry experts and elevate your understanding of key topics.
              Network with fellow participants and unlock new opportunities for growth and collaboration!
            </p> */}
          </div>
        </div>

        <div className="webinar_video">
          <video ref={(el) => (videoRefs.current[0] = el)} controls={false}
            poster={require('./VideoLibrary_Assests/Lap.png')} >
            <source src={localVideo} type="video/mp4" />
            Your browser does not support the video tag.

            ref={(el) => (videoRefs.current[0] = el)}
            controls={false}
            poster={require('./VideoLibrary_Assests/Lap.png')}
            onEnded={() => {
              setIsPlaying(false); // Reset play status when video ends
              setPlayingVideos((prevState) => ({
                ...prevState,
                [0]: false // Update playing state for the webinar video
              }));
            }}
            onClick={() => {
              const videoElement = videoRefs.current[0];
              if (videoElement && isPlaying) {
                videoElement.pause();
                setIsPlaying(false);
                setPlayingVideos((prevState) => ({
                  ...prevState,
                  [0]: false
                }));
              }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

            {/* <source src={localVideo} type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
          <div className="webinar_video--contents">
            {!isPlaying && !isHovered && (
              <div onClick={() => {
                handlePlayClick(0);
                setIsPlaying(true);
              }}>
                {/* <div className="webinar_video--playbutton">▶</div> */}
              </div>
            )}
            {isPlaying && (
              <div onClick={() => {
                const videoElement = videoRefs.current[0];
                if (videoElement) {
                  videoElement.pause();
                  setIsPlaying(false);
                  setPlayingVideos((prevState) => ({
                    ...prevState,
                    [0]: false
                  }));
                }
              }}>
                {/* <div className="webinar_video--pausebutton">❚❚</div> */}
              </div>
            )}
            
            <div className="webinar_video--date">
              <p>Sep 13, 2024</p>
            </div>
            <div className="webinar_video--title">
              <p style={{ color: "#FF7F00" }}>
                Building a Scalable Content Supply Chain for Growing Business
              </p>
            </div>
            <div className="webinar_video--text">
              <p>
                Expand your knowledge and enhance your skills with our expert-led sessions.
                Connect with like-minded professionals and build a network that fosters growth and collaboration!
              </p>
              <a className="download-click-button" onClick={() => handleButtonClick(localVideo)}>Download Now for the Full Video</a>
            </div>
          </div>

        </div>
        <div className="webinar_technical-content">
          <h1 style={{ fontFamily: "open sans" }}>Technical Videos</h1>
          <p className="webinar_technical-content--title">
            Behind Every Service - A Story in Motion
          </p>
          {/* <p className="webinar_technical-content--para" >Enhance your skills and stay updated with the latest technology trends through our technical video sessions. Join us for in-depth tutorials and expert insights that empower your learning journey!</p> */}
        </div>
      </div>

      {/* Video Tag Filters and Items */}
      <div className="video-tag-filters-section">
        <div className="video-tag-filters-wrapper">
          <h2>Filters:</h2>
          {isMobile ? (
            <select
              className="video-tag-dropdown"
              onChange={(e) => handleFilterChange(e.target.value)}
              value={activeFilter}
            >
              <option value="All">All</option>
              {Array.from(new Set(videoData.flatMap((video) => video.videoCategories || [])))
                .map((filter, index) => (
                  <option key={index} value={filter}>
                    {filter}
                  </option>
                ))}
            </select>
          ) : (
            <div className="video-tag-filters">
              <button
                onClick={() => handleFilterChange("All")}
                className={`video-tag-filter-button ${activeFilter === "All" ? "active-filter" : ""}`}
              >
                All
              </button>
              {Array.from(new Set(videoData.flatMap((video) => video.videoCategories || [])))
                .map((filter, index) => (
                  <div key={index} className="video-filter-item">
                    <button
                      onClick={() => handleFilterChange(filter)}
                      className={`video-tag-filter-button ${activeFilter === filter ? "active-filter" : ""}`}
                    >
                      <p>{filter}</p>
                    </button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="video-items">
        {filteredVideos.slice(0, visibleCount).map((video, index) => {
          const videoDetails = videoData.find((v) =>
            v.videosCollection.items.includes(video)
          );
          const videoCategories =
            videoDetails?.videoCategories?.join(", ") || "Uncategorized";

          const thumbnailUrl = videoDetails?.videoAssetsCollection?.items[0]?.url || "";

          return (
            <div className="video-items-description" key={index}>
              <div className="video-item">
                <div className="video-container">
                  <div className="video-wrapper">
                    <video
                      ref={(el) => (videoRefs.current[index + 1] = el)} // adjust index for multiple videos
                      poster={thumbnailUrl}
                      className="video-element"
                      onClick={() => handlePlayClick(index + 1)}
                      controls={false}
                    >
                      <source src={video.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {!playingVideos[index + 1] && (
                    <div className="play-button-overlay" onClick={() => handlePlayClick(index + 1)}>
                      <div className="play-button-icon">▶</div>
                    </div>
                  )}
                </div>

                <p className="video-categories">{videoCategories}</p>

                <h3 className="video-s">{videoDetails?.videoTitle || "Untitled Video"}</h3>

                <p className="video-description">{videoDetails?.videoDescription || "No description available."}</p>
              </div>
            </div>
          );
        })}
      </div>

      {hasMoreToShow && (
        <div className="videos-load-more-section">
          <div className="videos-load-more-wrapper">
            <button onClick={handleLoadMore} className="videos-load-more-button">
              Load More
            </button>
          </div>
        </div>
      )}

      <Modal showModal={showModal} closeModal={closeModal} handleSubmit={handleSubmit} video={video} />
      <div className="video-footer">
        <HomeFooter />
      </div>
    </div>
  );
};

export default VideoLibrary;
