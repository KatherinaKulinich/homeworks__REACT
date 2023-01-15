import React from 'react';



const TableHead = () => {


    return (
        <thead className="text-center">
            <tr>
                <th  className='col-3 table-primary'>
                    Full name
                </th>
                <th  className='col-3 table-primary'>
                    User name
                </th>
                <th  className='col-3 table-primary'>
                    Phone
                </th>
                <th  className='col-3 table-primary'>
                    Edit
                </th>
            </tr>
        </thead>
    );
}

export default TableHead;