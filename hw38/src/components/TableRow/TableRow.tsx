import React, { FC } from 'react';
import Button from '../Button/Button';


type Row = {
    userFullName: string,
    userName: string,
    userPhone: string,
    onDelete: (key: number) => void,
    id: number
}


const TableRow = ({userFullName, userName, userPhone, onDelete, id}:Row) => {
    return (
        <tr>
            <td className='col-3 table-secondary'>
                {userFullName}
            </td>
            <td className='col-3 table-secondary'>
                {userName}
            </td>
            <td className='col-3 table-secondary' >
                {userPhone}
            </td>
            <td className='col-3 table-secondary text-center'>
            <Button 
                buttonClass={'btn btn-warning'} 
                buttonHandle={() => onDelete(id)} 
                buttonText={'Delete contact'}
                buttonType={'button'}
            />
            </td>
        </tr>
    );
}

export default TableRow;