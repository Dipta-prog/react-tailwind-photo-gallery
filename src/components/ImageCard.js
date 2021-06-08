import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li className="text-white">
            <strong>Views: </strong>
            {image.views}
          </li>
          <li className="text-white">
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li className="text-white">
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;
