'use client'
import { useState } from "react";
import BlogHero from "./components/BlogHero/BlogHero";
import BlogInfo from "./components/BlogInfo/BlogInfo";
import Camping from "./components/Camping/Camping";

const Blog = () => {
    const [activeTab, setActiveTab] = useState("Camping");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <BlogHero activeTab={activeTab} handleTabClick={handleTabClick} />
            <BlogInfo />
            <Camping />
        </>
    )
}

export default Blog;