"use client";
import homeStyles from "@/app/page.module.css";
import imagewrap from "@/app/page.module.css";

export default function Home() {
  const headingStyle = {
    backgroundColor: "indigo",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };
  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </nav>

      <h1 style={headingStyle}>Affordable laptops</h1>
      <div className={imagewrap.wrapper}>
        <div className={imagewrap.showcasebox}>
          <div className={imagewrap.imgbox}></div>
          <div className={imagewrap.title}>
            Title:HP ZBook Fury 16 inch G11 Mobile
            Workstation
          </div>
          <div className={imagewrap.title}>
            Price:$2,039.00
          </div>
        </div>

        <div className={imagewrap.showcasebox}>
          <div className={imagewrap.imgbox2}></div>
          <div className={imagewrap.title}>
            Title:HP ZBook Power 16 inch G11 Mobile
            Workstation
          </div>
          <div className={imagewrap.title}>
            Price:$1,429.00
          </div>
        </div>

        <div className={imagewrap.showcasebox}>
          <div className={imagewrap.imgbox3}></div>
          <div className={imagewrap.title}>
            Title:HP ZBook Firefly 16 inch G11 Mobile
            Workstation
          </div>
          <div className={imagewrap.title}>
            Price:$1,349.00
          </div>
        </div>
      </div>
    </main>
  );
}
