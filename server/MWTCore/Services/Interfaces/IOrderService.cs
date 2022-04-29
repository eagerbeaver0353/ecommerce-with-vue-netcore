﻿using MWTCore.Models.Custom;
using MWTDbContext.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MWTCore.Services.Interfaces
{
    public interface IOrderService
    {
        public Task<bool> isCartAvailable(int id);

        public Task<int> AddCart(int UserID);

        public Task<CartMaster> GetCart(int UserID);

        public Task<int> AddToCart(CartItem cartItem);

        public Task<CartCheckout> cartCheckout(int CartID);

        public Task<bool> PurchaseSuccess(int CartID);
    }
}