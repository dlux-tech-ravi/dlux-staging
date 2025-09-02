import { React, useState, useEffect } from "react";
import HomeFooter from "../HomeFooter/HomeFooter";
import Navbar from "../Navbar";
import Banner_V3 from "../contents/Reuse_Components/Global/Banner/Banner_V3";
import Image_LeftV1 from "../contents/Reuse_Components/Global/Image_Left/Image_LeftV1";
import Image_LeftV2 from "../contents/Reuse_Components/Global/Image_Left/Image_LeftV2";
import Image_LeftV3 from "../contents/Reuse_Components/Global/Image_Left/Image_LeftV3";
import Testimonial from "../contents/Reuse_Components/Global/Testimonial_Slider/Testimonial";
import Image_LeftV4 from "../contents/Reuse_Components/Global/Image_Left/Image_LeftV4";
import Contact_Us_V4 from "../contents/Reuse_Components/Global/Contact_Us/Contact_Us_V4";

const WorkfrontFusion = () => {
  const [banner, setBanner] = useState(null);
  const [imageLeft, setImageLeftData] = useState([]);
  const [playBook, setPlayBook] = useState([]);
  const [clientSaying, setClientSaying] = useState([]);
  const [blogSection, setBlogSection] = useState([]);
  const [fusionVideos, setFusionVideos] = useState([]);
  const [fusionStaticVideos, setFusionStaticVideos] = useState([]);
  const [fusionVideosThumbmail, setFusionVideosThumbmail] = useState([]);
  const [fusionStaticThumbmail, setFusionStaticThumbmail] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const content1 = "Connect. Automate. Deliver with Fusion";
  const content2 = "Seamless Workflow Connections";
  const dlux = "DLUX";
  const dluxplaybook = "Playbook";
  const blogTitle = "Get The Latest News Here";
  const blogDescription =
    "Learn how teams use Workfront Fusion to simplify complex workflows and scale smarter.";
  const [fusionStaticContent, setFusionStaticContent] = useState(null);
  const [eqiqImagesCollection, setEqiqImagesCollection] = useState([]);
  const [healthCheck, setHealthCheck] = useState(null);

  useEffect(() => {
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
    const query = `
    {
      fusionData1: platformWorkfrontFusion(id: "7jHaQI4LMrYzWiGfgMpGz3") {
        bannersection { title description url }
        imageLeft { title description url }
        playBookCollection { items { title description url } }
        clientSayingCollection { items { title description url } }
        blogSectionCollection { items { title description url } }
        eqiqImagesCollection{items{url}}
        healthCheck{title url }
      }
      fusionData2: platformWorkfrontFusion(id: "46VPS8aoUJuGGBSwulgq6L") {
        fusionVideosCollection { items { title url } }
        fusionVideosThumbmailCollection{ items{ url } }
        fusionstaticvideosCollection { items { title url } }
        fusionStaticThumbmailCollection{ items { url } }
         fusionVideosDescription
      }
    }`;
    const fetchData = async () => {
      const r = await fetch(
        "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ query }),
        }
      );
      if (!r.ok) {
        const body = await r.text();
        console.error("Fetch error:", r.status, body);
        throw new Error(`Failed to fetch data: ${r.status}`);
      }
      const res = await r.json();
      console.log("GraphQL res:", res);

      const data1 = res.data.fusionData1;
      const data2 = res.data.fusionData2;

      setBanner(data1.bannersection);
      setImageLeftData(data1.imageLeft);
      setPlayBook(data1.playBookCollection.items);
      setClientSaying(data1.clientSayingCollection.items);
      setBlogSection(data1.blogSectionCollection.items);
      setFusionStaticVideos(data2.fusionstaticvideosCollection.items);
      setFusionVideos(data2.fusionVideosCollection.items);
      setFusionVideosThumbmail(data2.fusionVideosThumbmailCollection.items);
      setFusionStaticThumbmail(data2.fusionStaticThumbmailCollection.items);
      setFusionStaticContent(data2.fusionVideosDescription);
      setEqiqImagesCollection(data1.eqiqImagesCollection.items);
      setBlogSection(data1.blogSectionCollection?.items || []);
      const fixedHealthCheck = {
        ...data1.healthCheck,
        url: `https:${data1.healthCheck?.url || ""}`,
      };
      setHealthCheck(fixedHealthCheck);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner_V3 banner={banner} eqiqImagesCollection={eqiqImagesCollection} />
      <Image_LeftV1
        imageLeft={imageLeft}
        content1={content1}
        content2={content2}
      />
      <Image_LeftV2
        playBook={playBook}
        dlux={dlux}
        dluxplaybook={dluxplaybook}
        eqiqImagesCollection={eqiqImagesCollection}
      />
      <Image_LeftV3
        fusionStaticVideos={fusionStaticVideos}
        fusionStaticThumbmail={fusionStaticThumbmail}
        fusionVideos={fusionVideos}
        fusionVideosThumbmail={fusionVideosThumbmail}
        fusionStaticContent={fusionStaticContent}
      />
      <Testimonial clientSaying={clientSaying} />
      <Image_LeftV4
        blogSection={blogSection}
        blogTitle={blogTitle}
        blogDescription={blogDescription}
        eqiqImagesCollection={eqiqImagesCollection}
      />
      {/* <Contact_Us_V4 /> */}
      <Contact_Us_V4 healthCheck={healthCheck} />
      <HomeFooter />
    </div>
  );
};

export default WorkfrontFusion;
