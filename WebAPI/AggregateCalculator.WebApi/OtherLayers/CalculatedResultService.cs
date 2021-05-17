using System.Collections.Generic;
using System.Linq;

namespace AggregateCalculator.WebApi.OtherLayers
{
    public class CalculatedResultService : ICalculatedResultService
    {
        private readonly List<CalculatedResult> dummyData;

        public CalculatedResultService()
        {
            this.dummyData = new List<CalculatedResult>
            {
                new CalculatedResult { MinValue = 1, MaxValue = 49, AverageValue = 25 },
                new CalculatedResult { MinValue = 10, MaxValue = 20, AverageValue = 15 }
            };
        }

        public List<CalculatedResult> GetResults()
        {
            return this.dummyData.ToList();
        }

        public CalculatedResult CalculateResult(CalculatedResult item)
        {
            int[] arrInpValues = item.InputValues.Split(',').Select(x => int.Parse(x)).ToArray();
            return new CalculatedResult
            {
                MinValue = arrInpValues.Min(),
                MaxValue = arrInpValues.Max(),
                AverageValue = arrInpValues.Average(),
                InputValues = item.InputValues
            };
        }

    }
}
