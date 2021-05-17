using System;

namespace AggregateCalculator.WebApi.Models.CalculatedResult
{
    public class CalculatedResultModel
    {
        public int minvalue { get; set; }
        public int maxvalue { get; set; }
        public double averagevalue { get; set; }
        public string inputvalues { get; set; }
    }
}
