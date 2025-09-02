import React, { useEffect, useState, useRef } from "react";
import HomeFooter from "./../../../HomeFooter/HomeFooter";
import Navbar from "./../../../Navbar";
import "./OurTeam.css";
import hfcallicon from "./hfcallicon.png";
import hfmssgicon from "./hfmssgicon.png";
import hflocicon from "./hflocicon.png";

const OurTeam = () => {
  const [banner, setBanner] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [heroImage, setHeroImage] = useState(null);
  const [videos, setVideos] = useState([]);
  const [videoThumbnails, setVideoThumbnails] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [testimonialImagesCollection, setTestimonialImagesCollection] =
    useState(null);
  const [testimonialImagesCollections, setTestimonialImagesCollections] =
    useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lifeAtDluxContent, setLifeAtDluxContent] = useState(null);
  const [lifeAtDluxPara, setLifeAtDluxPara] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

  const query = `
    query {
      primaryBanner: aboutOurTeam(id: "r8PCeiSqZoaGxiLto0wOg") {
        banner {
          title
          description
          url
        }
      }
      secondaryBanner: aboutOurTeam(id: "4GIGM6f48K7Bakk8bZm8Gv") {
        secondaryImage {
          title
          description
          url
        }
      }
      heroBanner: aboutOurTeam(id: "6d1AqQ3umAFivZPzE75UIB") {
        heroImage {
      
          description
          url
        }
      }
        lifeAtDluxContent: aboutOurTeam(id: "3UZ2RqfX9PZVdqJhLB5Nhs") {
        lifeAtDluxContent
        lifeAtDluxPara
    lifeAtDluxVideoThumbnailCollection{
      items{
        url
      }
    }
       lifeAtDluxVideoCollection {
         items {
           url
         }
       }
     }
       testimonialData:aboutOurTeam(id: "3UZ2RqfX9PZVdqJhLB5Nhs") {
  testimonialImagesCollection{
    items{
      title
      description
      url
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
          body: JSON.stringify({ query }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to load data. Please try again later.");
      }

      const { data } = await response.json();
      setBanner(data.primaryBanner.banner);
      setSecondaryImage(data.secondaryBanner.secondaryImage);
      setHeroImage(data.heroBanner.heroImage);
      setLifeAtDluxContent(data.lifeAtDluxContent.lifeAtDluxContent);
      setLifeAtDluxPara(data.lifeAtDluxContent.lifeAtDluxPara);
      setVideos(data.lifeAtDluxContent.lifeAtDluxVideoCollection.items || []);
      setVideoThumbnails(
        data.lifeAtDluxContent.lifeAtDluxVideoThumbnailCollection.items || []
      );
      setTestimonialImagesCollection(
        data.testimonialData.testimonialImagesCollection.items
      );
      const images =
        data.testimonialData.testimonialImagesCollection.items || [];
      setTestimonialImagesCollections(
        Array.isArray(images) ? images : [images]
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("videos lenght:", videos.length);
  console.log("videoThumbmail lenght:", videoThumbnails.length);
  useEffect(() => {
    fetchData();
  }, []);
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % videos.length;
      setIsPlaying(false);
      return newIndex;
    });
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + videos.length) % videos.length;
      setIsPlaying(false);
      return newIndex;
    });
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % testimonialImagesCollections.length
      );
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [testimonialImagesCollections]);

  if (loading) return <div className="loading"></div>;
  if (error) return <div className="error">{error}</div>;
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="our-team">
      {banner && (
        <div className="banner-section">
          <img src={banner.url} alt="Banner" className="banner-image" />
          <div className="banner-content">
            <h2>
              {banner.title.includes(":") ? (
                <>
                  {banner.title.split(":")[0]}
                  <br />
                  {banner.title.split(":")[1].trim()}
                </>
              ) : (
                banner.title
              )}
            </h2>
          </div>
        </div>
      )}
      <div className="main-wrapper">
        <div className="main-div">
          {secondaryImage && (
            <div className="secondary-section">
              <div className="secondary-image-container">
                <img
                  src={secondaryImage.url}
                  alt="Secondary"
                  className="secondary-image"
                />
              </div>
              <div className="secondary-content">
                <h3>{secondaryImage.title}</h3>
                <p>{secondaryImage.description}</p>
              </div>
            </div>
          )}
        </div>
        <div className="p-globals">
          <img
            src="data:image/png;base64,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"
            alt="p-globals"
          />
        </div>
        <div className="p-balls2">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAYAAABUx/9/AAAABHNCSVQICAgIfAhkiAAAD7FJREFUeF7tnct22zYexkFSlmzL16ROarfTk0Vnk1n2BfoSfZ6cPE9foi/Q5WQzXeT0tEkTJ7EdW7YlkcB8oAgaggAQEKmbCeUotkWQIvDD97/xFpHwas0IRK3paegoCbBbNAkC7AC7RSPQoq4GZQfYLRqBFnU1KDvAbtEItKirQdkBdotGoEVdDcoOsFs0Ai3qalB2gN2iEWhRV1uhbEaqD/hgINDscb82GrYLxKbxbfKk2CjYq4BbNVk2Cf5aw15HuJsMf+1g1wK8CK9bY4TWTfU1ulI1x/2We0NeBFjXXfYctXWB7rnbrqPh3s4LchXg19VRt/ueFS1fVUTpHiO4augeu+o9TJUrOIG2AV4E3Kq9tsF3GM1VAnfYvare+y+vBXkVgE1dNIF3GNVVQHfYLX+YtjUqQeuUPC/g/85h1v8zZ3FFB75idJcNfKmwfUG/BuRXrnNtHrCu23acAK+xvVcq9DUCvjTYVtBzqPlXwP2lClZlA80GfrVvlC/+pQq+p8qXpfClwPYCXWWyTQpWwb6Zw4QLzi8VU26aAL7QLaO9DOALh90YaB1kGXAduFUWQoavA2+D7mHWFw18obCbAK011wKyI+Df35HoJwvQ37HspzPHwEyAV6BbzfuaAF8NbNlH28y2quYKyFVQqwSsLrdOAgN04qpyw8gvUt0Lg21UtQTaGm3LoKuUDOVqQcpyfm/x4aeSqjlh3cukfB10A/CZaH3JwBcC2wU0MSlap2adudYBBtw3gPrSV8Ka9m/w2Us+CXTwdeA5dNWfm1Qum/UlAl8ebDW90sF2Aa1C5uq1qVaA/GxR9lMHf60Dr0J3Be7gwxdhzhuHrVW1L2iT2ZZBGyD/Aag/NqDsP7CNH3WTQIWuA86/X1a5TuErAL582FWKdgF9plGpTrn/xqB/8ci3n0Dh/9PMFB30d5I1aAK4hkTT6m4UdqWqXfw0hy37aIuatSp+6gG3ygJ8njbvM2q3qVw16XP67yaBrxT2TA7tAZpISn4LwC904K7mAH8467/fYtsvZPCy0j2Aa3PximBtM2G7mG+TomWzbYNsg3toAX9lCdAk+FboJrPuonABfMGmvDFlW034AkAT2VyrkI1gzzT6f6c35uoEkBVvUvmaA18c7KoqmUizbKZbp2g56JIgvx+Q6FRlefPcv397H6Zyh/eYC6d9SfkCuhzMyWbdBXhVdK7sdVOm3H8wDEHNjLLFkNlUrUTeU+VOHWiTmmUl3whz/Xx6T2/ppK/PpI8/Fr/vxkpy+GGyYE+CLCtdp3IN8Klyq1ppswF/NLDVMqjGT78B6LIKJny0DvQM5Angc4A9kaFWRd3K8nNMgpNyAgC8DroFeF59EwqX07Iq/23w3WulbKOq+SCqyq4y33KxpBI07PZN9qADrl4Z8i3zt1y70YPKufJl1e8lWAa7LlRuU7gcpZuAq+q2ROZNAPcfDI1KXE34VKpl8tXCfBegp9Iq4aMPzyb7XYCWlfwJgL9R9/GuMOH886fSws/S7zvTpvwTFn1TgJ9Seg4cr6t3k58F8Lf4tUzPhEmvULc1FVuAKW8eti0wq1K1zU8bQJO9CcgZyBywDLbgenH3oPbjHUnFgjufABJ4GTq5KSaEAThy/0nvdQFbTXWvp7J9YcsVMkXVZXpVgubBl2S6C9BENtcSZA722MNfX6BtOQEU6ESY9yngGpOuAtdF57LvdjTlawHb1YQTV1Wr5nsKNDfdRTqlgpaVLNR7wfERcrlLoqOhuahyeUfYUbdQ5XExPYTqZegzwIs0TfLh85jzmRMeFhSo1TbjdWBrUy01KJNh52kVIm4RiAlFF6BLJXPInNlXEpNtrMPfo+KtKp1Dvsdb/MwIzZsAeql0FXgZuBWRuhqwGdQ9k4qJI2MmdTfst5cD25RuFSZcpFrlgQ2RZs2oGsBuTyYRtwKacDWrkGMSD1KS9O8Anf/bwvrZTkRStO3AX4/u8AbobUIHlND+IeGoaQ5fgk64yrXAz1mZlmmAiwMn2lTMloZtlLJ90y2Lry4rY6JYsgfY/MVhC9NdgP4zIfEPXMHP8B6TBNA6hO4kpMsSkuF9T5JRxGLgBHDCulsRBeyMRBHe93jj9y6WoDUH/ifM+w97aM1Nuwy8NOeAzV/Iw8tKm0jHTL7bJ1DbCGW7wBaBmZpXF+XQv6Dq7yepTZFm4ece//3kQdW7iLgL0LlfvoZ6j3INd8j9TockrDMcsl7E2FZ3zLZIttUhHZakgN2hUO84zYA1HW1FY8aica8TDcn4PoUFSHPoUPcl3rk/F8Bvi4g8B36OGALLRNEF6v4Lu/w9By7KqSIy1+XdVYHaWsM2lUh1wZkJ9owJR04tCic8KNOZb+5dR9Ajx5wBFd3eIj3AHbIdMu700oRtd1LWg7qxLOlkoyxGtswNNlQcjVMaDTuj9J7EgL0d3RE6HPOpQHbx7qPVAFtV1c0nIgcuR+dK7p2nYnVg8++QgNeNyJv12fPAtqVbuaonqVZZOBGwJVXnmLmiuSaH210oukso203TpN9J2G42jvvw07v4rEfG8VaS0SjjyiaACdCE0tuERYM0Sm87NB7AZN+SaMinzwiwx5hLFOp9MOeSusuCi1xdczXlVcreNNhl1QwVs99QB/9ZRMNC2RrY0ya8yKvlCFz21cOLiIMeXJCtPrwzSXowuqxPEJel9/SgQ+KDbBwdJPyzjOzQUQSF5xaAxhGD2SZ3WcYGSRR9TSn92unGXwnNBgjgBncATvfIqL9fAH9+zGZ8t4jMJdilKa/w279hLH4ugM9U0zRB2vor25ZfK/767TWJXrzACEhR+Afk1fnhDdmEQ9V5msWjb67qXfwP0Pd0u4fAug9F7xMWH3QYPSZZdExpdBSnbJ9mUR8/exTBW0xJRjM2jGk0oJRex5RdEhJfpBm9IN3sKybJ9X0nHmwn90NyAIXfYHpA3Rcw53nhRfbdMOX8ONlzfnhUzrmRdL/AnsyYcpcgba1hmypnHrAJYJMSNsKzQ/honb+WTXifJEiboOqd7jCjuz2W7JEOPYKze0LGKJNT8pSm0VOY8aOYRdyc9xhgI/6GttmQpmwAU36JSYAMH2/CPpEo/kJYdjlM4pve7vB2INQt+24F9iQqRyRwxQM4aJubcsAmdWFLpnx9lD0H7JlDmVPBmQTbYMIvYcKPdqDpO5jv7e0eSWF0o+QwywA3IycRi57FGXlGKfkGMI9YGu1P/HaeXGVkzIZRSq4pI5dQ+ieY/w/w5Qix2XnSzT5D/1ekF9+QDtR9SEaXgH1UZcpl2ByUFKSV+baPsjcdtqic2Yop7wdnkzNPuLJN/vrrRWHCd+Gnsx0CH036yTEZRcjPUGpLo2+zNDqNM3bCw6vcEKfRNiDzvBtJV3SPnzcI7C5g0s8TfrkBYf9A4R9IJz4naXZBDuDDo+Fdacr/dUxtfnuSb+OImBSkqcUVp0qa5nDnZipbqZyVZ4rKygZsHojPwOYmnL94fs1hHyGnznZ61/DV+8PkAIHVE3jx5wB7SjNyBmWfAuszAD2OMrbHUoJ0LI/cEZKzO/ydw8ZGP8ICvIcRfkdi9p6rnBD65RoB2/7+cADbMcS/lAjYfB+4Kefplxyk8VPaFNj5/iIFq6ykyWXTVsGWj1nLyhaw332JipSrQ4Y726Mo63dHyVG2lfvpb4HgDD/PYhqfMkafwX8/gYr3oWaYcSibl0xSROMZIgVKvsCcAzaHTPiBakxH9k+S0E+j3eiyu5UgHbu7R1k1L7SQsycTp6WDzT/n+bYm/QqwJ35tolZZ2TJs+QiXCXYn28thx9EJzPFzqPQ7gPkOQdkpo4wr+wnee4AOZAXsMYqiNDfjXxCwTWBH5G/477+zDvsAW38+2okvu73kxgqb7zsvrsjHuQPsAqqLGQ/Kfgh5i9JX8NnBZ+dG0eXVXLnUI/UK0bh0Ww9TyfTRBGh8GsKU2/Jsl9TLlmcnyLOpZ55NGfsIf/0xq5Fn61IvUUFrZZ6dmxzut9XDm6usoFFUz1iooFndwdRpSbqjXh7l0rq1cRza7CE3zmvjHdTGyRy1cVTML9KiNo7CyoCE2vgD/yrYm3zUix/mLOvi/DBnVam0uICgvUe9+LywnbywLsezExzPzsLx7HpmvAq26reXcKbKcJglsPe8FhbOVHHJ2UQb7anEa34OWn7CYTgHzQfzpO3csEVEzn82dHbpFU5kOGzw7NIrnF16GM4uNQRoBf18qazucN747CW8j+a8cRW2wW+HK0IK0TyqK0JMQZrFlJeX6oZrvUozuvIDITN+O1zFOX3Z7mO6irM2bJ26+WfGC/ymL8QP12e7B9W1j3oZI3KN3w53XsCgSIHZ5t95QY7IHQO1fG6aLgfiy4w3zwn3VHHXtcNDxF035n2dNt+w4b4q4W5J06NeNzATW2vEjPuY8vyL5Vo5/7u4Pdai7oOWXycmeqy5DxpOFJduhcUbhvugWUXudXssFbjPPUvDHQ5dje1Mu8UpW/bd4d6l04+U8Li7IR/GtTPjWlO+YOAzt54OdyW2qr4xZVfC5g0UhYf7jWNMHuX9xjWwy2nocD/TvK3yXJDwJAE/992osudR91R0zv8IzwgpCTblq8UGlw/bpHCXh7aFp//4SVlp3ThsJ3W7ABcqVx/gNsdzvaoe/2R8rJM8WOG5XvqJNpNzi2a2I2KijcuD3Hjb8MQ+b5UvRNlGdcupGA/OEZ2/Mu2yi1kX64ZncTqBXxhsV+DGZ3LyDYSn7DpBdG20GtiKwvOdNTzgrYnnZ2tNvjpC4fnZrnPG3M7ovz2A51tXVS4COPHVjg9On6tH4mEufGX1Sbr8M9dnZvO2Fnk1nWqpfV2ossWXNQbcBF0Fz/+uA1+GawJcBZkvd3i4qhijRYOumGdzacC4khdwi1kXX6A17+q3iwKNT1d0ypXW155dom5fhbxiRUsTymck6rW1AuebllMz/GmN1tVd0Zn5erv7sLbNTEvf8ZqL2UPNxRxQet3UTs9uZylmXP5aX+D5uqan81aNyzwTwBHszFd7qnnZoJdqxr2Aa1Rerj8v+KqJMc9yHWDHUV2Gj1a7tHRlNwa9juLnASvWMQFeY8hi11cKuxCw+z5UebdFqN4G1xGwNNhVPagzDSvXdR/oyk3Va1Dpy9XNr3LYPEdtFSZbR8Nzt+sBdVnbG7riF1y+w6tNjRFaF8hrY8ZtA18LvBfR5hqvG2C5ZzXmbXMD5LqldYS/znDXKhp3hWxqtwr4mwT3UcF2nSwuk2KTIbqOw0aZcddOhXb6EQiwWzQzAuwAu0Uj0KKuBmUH2C0agRZ1NSg7wG7RCLSoq0HZAXaLRqBFXQ3KDrBbNAIt6mpQdoDdohFoUVeDslsE+/8f938/5MlIBwAAAABJRU5ErkJggg=="
            alt="p-balls2"
          />
        </div>
        <div className="p-balls3">
          <img
            src="data:image/png;base64,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"
            alt="p-balls3"
          />
        </div>
        <div className="life-at-dlux">
          <h1>Voices of Visionaries</h1>
          <p>
            Ever wondered how DLUX came to be? Tune in as our leaders share the
            'aha!' moments that fueled their ideas and brought DLUX to
            life-because every great vision has a story worth telling.
          </p>
        </div>

        {heroImage && (
          <div className="hero-section">
            <div className="hero-container">
              <div className="hero-image-container">
                <div className="hero-image">
                  <img src={heroImage.url} alt="Luxman Pai" />
                </div>
                <div className="hero-label">
                  <h1>Luxman Pai</h1>
                  <h2>President & CEO</h2>
                </div>
              </div>
              <div className="hero-description">
                {heroImage.description.split("\n").map((para, key) => (
                  <em key={key}>
                    {para}
                    <br />
                  </em>
                ))}
              </div>
            </div>
          </div>
        )}

        <div>
          {videos.length > 0 && (
            <div className="videos-section">
              <div className="videos-container">
                <div className="videos-section-content">
                  <h1>
                    {lifeAtDluxContent.includes(":") ? (
                      <>
                        {lifeAtDluxContent.split(":")[0]}
                        <br />
                        {lifeAtDluxContent.split(":")[1].trim()}
                      </>
                    ) : (
                      lifeAtDluxContent
                    )}
                  </h1>
                  <p className="videos-section-descriptions">
                    {lifeAtDluxPara}
                  </p>
                </div>

                <div className="videos-wrapper">
                  <video
                    ref={videoRef}
                    src={videos[currentVideoIndex].url}
                    poster={videoThumbnails[currentVideoIndex]?.url || ""}
                    controls={false}
                    className="videos-player"
                    onMouseEnter={() => setIsHovered(false)}
                    onMouseLeave={() => setIsHovered(true)}
                  />
  
                  <div className="hidden">
                    {!isPlaying ? (
                      <div
                        className="plays-button-overlay"
                        onClick={handlePlayPause}
                      >
                        ▶
                      </div>
                    ) : (
                      <div
                        className="pauses-button-overlay"
                        onClick={handlePlayPause}
                      >
                        ❚❚
                      </div>
                    )}
                  </div>
                </div>
                <div className="videos-section-description">
                  <p>{lifeAtDluxPara}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="videos-controls">
          <button onClick={handlePrevVideo}>❮</button>
          <button onClick={handleNextVideo}>❯</button>
        </div>

        <div className="p-global5">
          <img
            src="data:image/png;base64,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"
            alt="p-global5"
          />
        </div>

        {testimonialImagesCollection.length > 0 && (
          <div className="testimonial-section">
            <div className="testimonial-content">
              <h2>{testimonialImagesCollection[0].title}</h2>
              <p>{testimonialImagesCollection[0].description}</p>
            </div>

            <div className="testimonial-image-container">
              {testimonialImagesCollections.length > 0 && (
                <div className="testimonial-image">
                  <img
                    src={
                      testimonialImagesCollections
                        .slice() // Create a copy to safely reverse
                        .reverse()[currentImageIndex]?.url
                    }
                    alt="Testimonial"
                  />
                </div>
              )}
            </div>
          </div>
        )}
        {/* Dots Navigation */}
        <div className="dot-navigation">
          {testimonialImagesCollections
            .slice() // Avoid mutating original
            .reverse()
            .map((_, index) => (
              <div
                key={index}
                className={`dot ${
                  currentImageIndex === index ? "active" : "inactive"
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
        </div>
      </div>

      <div class="boxContainer">
        <img
          src="https://images.ctfassets.net/pj0maraabon4/2BH6j1KDX1It5wARjzymTC/4aa70b7ee0b765049b22e89c5df3c9ae/Group_771.png"
          alt="bottomImage3"
        />
      </div>
      <div className="form-home">
        <div className="hform-ls">
          <h1>Let's Connect</h1>
          <p>
            Hop on board to discover how DLUX can wield its
            <br />
            marketing magic tool, ensuring a seamless workflow
            <br />
            all the way through.
          </p>

          <div className="hform-ls-icons">
            <div>
              <img src={hfcallicon} className="hfcallicon" alt="hfcallicon" />
              <p>+61 411 048 090</p>
            </div>
            <div>
              <img src={hfmssgicon} className="hfmssgicon" alt="hfmssgicon" />
              <p>sales@dluxtech.com</p>
            </div>
            <div>
              <img src={hflocicon} className="hflocicon" alt="hflocicon" />
              <p>
                Suite-3, Level 2, 9 George Street
                <br />
                Parramatta CBD, Sydney - NSW 2150
              </p>
            </div>
          </div>
        </div>
        <div className="hright">
          <div className="hright-content">
            <form
              action="https://forms.zohopublic.in/dluxtech/form/ContactUs/formperma/31chFm8VXcXIgilsROO-K9qJZ1vauQDQ-ITFT9TZAbU/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              accept-charset="UTF-8"
              encType="multipart/form-data"
            >
              <input type="hidden" name="zf_referrer_name" value={""} />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              <div className="hinput-container">
                <input
                  type="text"
                  maxLength="255"
                  name="Name_First"
                  fieldType={7}
                  placeholder="First Name"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="hinput-container">
                <input
                  type="text"
                  maxLength="255"
                  name="Name_Last"
                  fieldType={7}
                  placeholder="Last Name"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="hinput-container">
                <label> </label>
                <input
                  type="email"
                  maxLength="255"
                  name="Email"
                  fieldType={9}
                  placeholder="E-Mail"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="hinput-container">
                <label></label>
                <input
                  type="tel"
                  compname="PhoneNumber"
                  name="PhoneNumber_countrycode"
                  phoneFormat="1"
                  isCountryCodeEnabled={false}
                  maxLength="20"
                  fieldType={11}
                  id="international_PhoneNumber_countrycode"
                  placeholder="Phone Number"
                  pattern="[0-9]*"
                  title="Please enter only numbers"
                  autoComplete="off"
                />
              </div>

              <div className="hinput-container-textarea">
                <label></label>
                <textarea
                  name="MultiLine"
                  maxLength="65535"
                  placeholder="How Can We Help?"
                  required
                ></textarea>
              </div>

              <div>
                <button className="hformButton" type="submit">
                  <em>Submit</em>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Navbar />
      <HomeFooter />
    </div>
  );
};

export default OurTeam;
