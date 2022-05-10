﻿using System;
using System.Collections.Generic;
using System.Text;

namespace MWTCore.Models.Custom
{
    class OfferModel
    {
        public int ProductID { get; set; }
        public int Offer { get; set; }

        public DateTime OfferStart { get; set; }
        public DateTime OfferEnd { get; set; }
    }
}
