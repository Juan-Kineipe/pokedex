import { useEffect, useState } from "react";
import "./styles.scss";

export const Footer = (props: any) => {
  const [pages, setPages] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fillPages();
  }, []);

  const fillPages = () => {
    const tempPages = [];
    for (let i = 1; i <= 22; i++) {
      tempPages.push(i);
    }
    setPages(tempPages);
  };

  const handlePageClick = (event: any) => {
    if (event < 0 || event > pages.length) return;
    setPageCount(event);
    props.handleOffset(event * 40);
  };

  return (
    <div className="footer">
      <div className="footer__pages">
        <button
          className="footer__btn"
          onClick={() => handlePageClick(pageCount - 1)}
        >
          prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className="footer__btn"
            onClick={() => handlePageClick(page-1)}
          >
            {page}
          </button>
        ))}
        <button
          className="footer__btn"
          onClick={() => handlePageClick(pageCount + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};
