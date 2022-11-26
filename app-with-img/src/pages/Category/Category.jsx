import "./Category.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleCategory } from "../../components/actions/singleCategory";
import ImgCard from "../../components/imgCard/ImgCard";
import Loading from "../../components/Loading";

const Boxes = () => {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();
  const data = useSelector((data) => data.photos);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    try {
      setLoading(true);
      const res = await getSingleCategory(pages, id);
      setLoading(false);
      dispatch({
        type: "ALL_PHOTOS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const moreClick = () => {
    setPages((prev) => prev + 1);
  };

  useEffect(() => {
    getImages();
  }, [pages]);

  useEffect(() => {
    setPages(1);
    dispatch({
      type: "CATEGORY_CHANGE",
    });
    getImages();
  }, [id]);

  return (
    <>
      <div className="content-wrapper">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="gallery">
              {data &&
                data.length &&
                data.map((elem) => (
                  <Link key={elem.id} to={`/img/${elem.id}`}>
                    <ImgCard src={elem.url} alt={elem.id} />
                  </Link>
                ))}
            </div>
            <button id="loadMore" onClick={moreClick}>
              Load more
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Boxes;
