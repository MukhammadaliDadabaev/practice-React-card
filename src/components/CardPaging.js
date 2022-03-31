// Button Knobka function
function CardPaging({ currentPage, totalPage, setCurrentPage }) {
  const lable = currentPage === totalPage ? "Prev" : "Next";

  const changesBtn = () => {
    let newPage;
    if (currentPage === totalPage) {
      newPage = currentPage - 1;
    } else {
      newPage = currentPage + 1;
    }
    setCurrentPage(newPage);
  };
  return (
    <div>
      <button className="btn" onClick={changesBtn}>
        {lable}
      </button>
    </div>
  );
}
export default CardPaging;
