using System.Collections.Generic;

namespace AggregateCalculator.WebApi.OtherLayers
{
    public interface ICalculatedResultService
    {
        List<CalculatedResult> GetResults();
        CalculatedResult CalculateResult(CalculatedResult item);
    }
}
