import { useEffect, useState } from "react";
import PostCard from "../components/communityForm/PostCard";
import { Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import moment from "moment";
import Loader from "../components/Spinner";

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Display posts
  const showPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://learnheart-server.onrender.com/api/posts/posts/show");
      setPosts(data.posts ?? []);
    } catch (error) {
      console.error(error.response?.data?.error || "Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    showPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-custom-page">
      <Navbar />
      <Container className="flex-grow py-20"><br />
        <div className="flex justify-center w-full">
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }} 
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="w-full"
          >
            {loading ? (
              <Loader />
            ) : (
              (posts ?? []).map((post, index) => (
                <Grid item xs={4} sm={4} md={4} key={post._id || index}>
                  <PostCard
                    id={post._id}
                    title={post.title}
                    content={post.content}
                    image={post.image}
                    subheader={moment(post.createdAt).format("MMMM DD, YYYY")}
                    comments={post.comments?.length ?? 0}
                    likes={post.likes?.length ?? 0}
                    likesId={post.likes ?? []}
                    showPosts={showPosts}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CommunityPage;
