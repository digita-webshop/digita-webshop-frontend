import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IReviews } from "../Services/Types/product";

export function useLoadReviews(reviews: IReviews[] | []) {
  const [indexOfLoadedReviews, setIndexOfLoadedReviews] = useState(6);
  const { hash } = useLocation();

  const loadMoreReviewsHandler = () => {
    setIndexOfLoadedReviews((prev) => {
      if (prev < reviews.length) {
        return prev + 6;
      }
      return 6;
    });
  };

  useEffect(() => {
    if (!hash.includes("#review")) {
      return;
    }
    const hashId = hash.replace("#review-", "");
    const index = reviews.findIndex((item) => item._id === hashId);
    if (index > indexOfLoadedReviews) {
      setIndexOfLoadedReviews(index + 1);
    }
  }, []);

  return { indexOfLoadedReviews, loadMoreReviewsHandler };
}
