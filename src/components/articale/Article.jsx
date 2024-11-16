import React from 'react';

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-800">
      <div className="w-full h-full bg-gray-900">
        <img src={imgUrl} alt="blog_image" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between p-4 h-full">
        <div>
          <p className="font-semibold text-sm leading-8 text-white">{date}</p>
          <h3 className="font-bold text-xl leading-7 text-white mb-20 cursor-pointer">
            {text}
          </h3>
        </div>
        <p className="cursor-pointer text-white">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;