import React from "react";
import "../styles/Blog.css";
import underline from "../assets/underline.svg";
import imgUrl from "../assets/Rectangle415.png";
import thumbnail from "../assets/Rectangle1413.png";

const data = [
  {
    id: "01",
    imgUrl: imgUrl,
    name: "Cristian Fernández",
    description: "Derecho penal",
    rating: 2.5,
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
    const { id,
    imgUrl,
    name,
    description,
    rating,
    blogTitle,
    thumbnail,
    blogContent,
    tags,
    commentsCount,
    likesCount } = item;
  return (
    <article className="blog_card">
        <img src={imgUrl} alt="wallpaper" />
    </article>
  );
};
