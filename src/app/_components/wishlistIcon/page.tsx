
"use client";

import React, { useState } from 'react';
import AddProductWishlist from '@/app/ApiServices/WishlistActions/addProductWishlist.api';
import RemoveProductWishlist from '@/app/ApiServices/WishlistActions/removeProductWishlist.api';
import { toast } from 'sonner';

export default function WishlistIcon({ id }: { id: string }) {
  const [isRed, setIsRed] = useState(false);

  const handleClick = async () => {
    if (!isRed) {
      // Add to wishlist
      const res = await AddProductWishlist(id);
      if (res.status === 'success') {
        setIsRed(true);
        toast.success("Product added to WishList Successfully", {
          duration: 2000,
          position: 'top-center'
        });
      }
    } else {
      // Remove from wishlist
      const res = await RemoveProductWishlist(id);
      if (res.status === 'success') {
        setIsRed(false);
        toast.success("Product removed from Wish List Sucessfully", {
          duration: 2000,
          position: 'top-center'
        });
      }
    }
  };

  return (
    <div onClick={handleClick} className="text-end cursor-pointer mb-2">
      <i className={`fa-solid fa-heart text-xl heart transition-colors duration-300 ${isRed ? 'text-red-500' : 'text-gray-900'}`}></i>
    </div>
  );
}
