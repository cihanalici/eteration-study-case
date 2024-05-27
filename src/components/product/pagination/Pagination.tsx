import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      paginationItems?.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={currentPage === 1 ? "active" : ""}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        paginationItems.push(<span key="dots1">...</span>);
      }

      const startPage = Math?.max(2, currentPage - 1);
      const endPage = Math?.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginationItems?.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        paginationItems?.push(<span key="dots2">...</span>);
      }

      paginationItems?.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={currentPage === totalPages ? "active" : ""}
        >
          {totalPages}
        </button>
      );
    }

    return paginationItems;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IconChevronLeft size={16} />
      </button>
      {renderPaginationItems()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IconChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
