import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { BookWrapper } from './styled';

const BookList: React.FC = (): JSX.Element => {

  return (
    <BookWrapper className="">
      <div className="header">
        <h1 className='title' >You’ve got <span>7 book</span>  </h1>
        <Button type='primary' size='large' > + Create a book</Button>
      </div>
      <p>Your books today</p>
      <div className="grid-rows-3 mt-8 gap-8">
        <div className="w-96 h-52 p-8 bg-white rounded-xl shadow border border-gray-200 flex-col justify-start items-end gap-4 inline-flex">
          <div className="self-stretch h-28 flex-col justify-start items-start gap-1.5 flex">
            <div className="self-stretch text-neutral-900 text-base font-semibold ">Raspberry Pi User Guide</div>
            <div className="self-stretch text-zinc-800 text-sm font-normal  leading-tight">Cover: http://url.to.book.cover<br />Pages: 221<br />Published: 2012<br />Isbn: 9781118464465</div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className=""><span className="text-zinc-800 text-sm font-medium  leading-none">Eben Upton /</span><span className="text-zinc-800 text-sm font-bold  leading-none"> </span><span className="text-zinc-800 text-sm font-normal  leading-none">2012</span></div>
            <div className="px-3 py-0.5 bg-red-600 rounded-lg justify-start items-center gap-1.5 flex">
              <div className=" text-center text-white text-base font-bold ">New</div>
            </div>
          </div>
        </div>
      </div>
    </BookWrapper>
  );
};

export default BookList;