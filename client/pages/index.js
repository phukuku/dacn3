import styles from "../styles/Home.module.css";
import ImageSlider from "./components/slider/ImageSlider";
import ImageData from "./components/slider/ImageData";
import Product from "./components/feature/Product";
import Phu from "./components/footer/Phu";
import End from "./components/footer/End";
import Slider from "./components/slider/Slider";
import SubProduct from "./components/feature/SubProduct";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [pdList, setPdList] = useState([]);
  const [viewList, setViewList] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      fetchRsList();
      fetchViewList();
      fetchBookedList();
    }
  }, [router.isReady]);

  async function fetchRsList() {
    try {
      const response = await Axios.get("http://localhost:5000/api/realEstate/");
      setPdList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchViewList() {
    try {
      const response = await Axios.get("http://localhost:5000/api/user/topview");
      setViewList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchBookedList() {
    try {
      const response = await Axios.get("http://localhost:5000/api/user/topbooking");
      setBookList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const bgImgBanner = "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80";

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className="mt-4">
        <ImageSlider sliders={ImageData} />
      </div>
      <div className="pt-16">
        <Phu />
      </div>
      <div className="mt-6 bg-opacity-30" style={{ backgroundImage: `url(${bgImgBanner})` }}>
        <h1 className="text-center italic font-serif mb-3 text-4xl text-slate-100 pt-6 font-semibold">
          Top Viewed Real Estate
        </h1>
        <div className="flex items-center justify-center px-6">
          {viewList && Array.isArray(viewList) && viewList.map((each, index) => (
            <div className="p-9 text-white" key={each.RealEstateId}>
              <Product
                id={each.RealEstateId}
                image={each.imgURL}
                title={each.Title}
                area={each.Area}
                room={each.MaxRoom}
                toilet={each.Toilet}
                direction={each.Direct}
                price={each.Price}
                view={each.countViewed}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10 bg-gray-100">
        <Slider list={pdList} />
      </div>
      <div className="mt-6">
        <h1 className="text-center italic font-serif mb-3 text-4xl text-sky-800 pt-6 font-semibold">
          Most Booked Apartment
        </h1>
        <div className="flex items-center justify-center px-6">
          {bookList && Array.isArray(bookList) && bookList.map((each, index) => (
            <div className="p-9 text-black" key={each.RealEstateId}>
              <SubProduct
                id={each.RealEstateId}
                image={each.imgURL}
                title={each.Title}
                area={each.Area}
                room={each.MaxRoom}
                toilet={each.Toilet}
                direction={each.Direct}
                price={each.Price}
                book={each.countBooked}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pb-16 bg-slate-50 w-full">
        <End />
      </div>
      <section className="bg-gray-100 pt-10">
        <div className="flex justify-center max-width w-full pr-4 pl-4 mr-auto ml-auto">
          <div className="flex flex-wrap -mr-4 -ml-4">
            <div className="col-lg-12 text-center">
              <h2 className="font-serif font-semibold text-black text-4xl flex flex-wrap -mr-4 -ml-4">
                Don’t forget to follow us
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full">
        <div className="flex justify-center w-full pr-4 pl-4 mr-auto ml-auto pb-10 bg-gray-100">
          <div className="flex justify-center flex-wrap w-full -mr-4 -ml-4">
            {/* Your image elements here */}
          </div>
        </div>
      </div>
    </div>
  );
}
