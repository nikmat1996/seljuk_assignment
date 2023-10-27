import React from "react";
import "../styles/Blog.css";
import underline from "../assets/underline.svg";
import imgUrl from "../assets/Rectangle415.png";
import thumbnail from "../assets/Rectangle1413.png";
import flag from "../assets/flag.svg";
import star from "../assets/star.svg";
import halfStar from "../assets/halfStar.svg";
import darkStar from "../assets/darkStar.svg";
import Comment from "../assets/Comment.svg";
import Thumbs from "../assets/Thumbs.svg";
import share from "../assets/share.svg";
import shareIcon from "../assets/shareIcon.png";

const data = [
  {
    id: "01",
    imgUrl: imgUrl,
    name: "Cristian Fernández",
    description: "Derecho penal",
    rating: 2.5,
    flag,
    blogTitle: "Title of blog post",
    thumbnail: thumbnail,
    blogContent:
      "Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.",
    tags: ["Pill Labels", "Pill Labels", "Pill Labels"],
    commentsCount: 123,
    likesCount: 340,
  },
  {
    id: "02",
    imgUrl: imgUrl,
    name: "Cristian Fernández",
    description: "Derecho penal",
    rating: 2.5,
    flag,
    blogTitle: "Title of blog post",
    thumbnail: thumbnail,
    blogContent:
      "Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.",
    tags: ["Pill Labels", "Pill Labels", "Pill Labels"],
    commentsCount: 123,
    likesCount: 340,
  },
  {
    id: "03",
    imgUrl: imgUrl,
    name: "Cristian Fernández",
    description: "Derecho penal",
    rating: 2.5,
    flag,
    blogTitle: "Title of blog post",
    thumbnail: thumbnail,
    blogContent:
      "Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.",
    tags: ["Pill Labels", "Pill Labels", "Pill Labels"],
    commentsCount: 123,
    likesCount: 340,
  },
];

function Blog() {
  return (
    <section className="blog_wrapper">
      <h1 className="blog_heading">Blog</h1>
      <img className="blog_underline" src={underline} alt="underline" />
      <p className="blog_subText">
        Encuentra los artículos relacionados a tu sector y entérate de las
        ultimas noticias.
      </p>
      <BlogCardContainer />
    </section>
  );
}

export default Blog;

const BlogCardContainer = () => (
  <div className="blog_cardContainer">
    {data.map((item) => (
      <BlogCard key={item.id} item={item} />
    ))}
  </div>
);

const BlogCard = ({ item }) => {
  const {
    imgUrl,
    name,
    description,
    rating,
    thumbnail,
    blogTitle,
    blogContent,
    tags,
    commentsCount,
    likesCount,
  } = item;
  return (
    <article className="blog_card">
      <div className="wallpaper_wrap"><img className="wallpaper" src={imgUrl} alt="wallpaper" /></div>
      <div className="card_profileWrap">
        <img className="card_profilePic" src={thumbnail} alt="profile photo" />
        <div className="card_nameWrap">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="card_rating">
            <img src={star} alt="starIcon" />
            <img src={star} alt="starIcon" />
            <img src={halfStar} alt="starIcon" />
            <img src={darkStar} alt="starIcon" />
            <img src={darkStar} alt="starIcon" />
          </div>
          <div className="shareIcon">
            <img src={shareIcon} alt="share icon" />
            
          </div>
        </div>
        <img className="card_flag" src={flag} alt="flag icon" />
      </div>
      <h2 className="card_blogTitle">{blogTitle}</h2>
      <p className="card_blogContent">{blogContent}</p>
      <div className="card_tagsWrap">
        {tags.map((tag, i) => <div key={tag+i}>{tag}</div>)}
      </div>
      <div className="card_mediaWrap">
        <div className="engagements">
          <img src={Comment} alt="comments" />
          <span>{commentsCount}</span>
        </div>
        <div className="engagements">
          <img src={Thumbs} alt="likes" />
          <span>{likesCount}</span>
        </div>
        <button>Compartir <span><img src={share} alt="share icon" /></span></button>
      </div>
    </article>
  );
};
