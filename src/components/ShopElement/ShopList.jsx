import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../../pages/Shop/shop.css';
import Pagination from 'react-bootstrap/Pagination';

const ShopList = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; 
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className='list'>
                {data
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((prod) => (
                        <ProductCard key={prod.id} prod={prod} />
                    ))}
            </div>
            <div className="pagination-container">
                <Pagination>
                    <Pagination.Prev
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                    />
                    {[currentPage - 1, currentPage, currentPage + 1].map((pageNumber) => (
                        pageNumber > 0 && pageNumber <= totalPages && (
                            <Pagination.Item
                                key={pageNumber}
                                active={pageNumber === currentPage}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </Pagination.Item>
                        )
                    ))}
                    <Pagination.Next
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                    />
                </Pagination>
            </div>
        </div>
    );
};

export default ShopList;
