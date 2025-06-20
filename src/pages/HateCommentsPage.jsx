// src/pages/HateCommentsPage.jsx
import React, { useState } from 'react';

export default function HateCommentsPage() {
  const [comments, setComments] = useState([
    { id: 1, text: "Chelsea is the worst team in the Premier League!", author: "Kiri" },
    { id: 2, text: "I've never seen a team with such overpaid and underperforming players", author: "Arshu" },
    { id: 3, text: "First oil team, paison se khareedi hai trophy!", author: "Teri maa" }
  ]);
  
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, author: "You" }
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Chelsea Hate Comments
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="flex mb-6">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add your hate comment..."
            className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 text-white"
          />
          <button 
            onClick={addComment}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-r-lg"
          >
            Post
          </button>
        </div>
        
        <div className="space-y-4">
          {comments.map(comment => (
            <div 
              key={comment.id}
              className="bg-gray-800 p-6 rounded-xl border-l-4 border-red-600"
            >
              <p className="text-white text-lg">"{comment.text}"</p>
              <p className="text-gray-400 mt-2">- {comment.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
