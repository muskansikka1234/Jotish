import React from 'react'

const Features = ({icon, title, text}) => {
  return (
    <div className="flex gap-4">
      {/* Icon */}
      <div className="text-gray-400 mt-1">
        {icon}
      </div>

      {/* Text Content */}
      <div>
        <h4 className="font-semibold text-white mb-1">
          {title}
        </h4>

        <p className="text-gray-400 leading-relaxed text-sm max-w-md">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Features
