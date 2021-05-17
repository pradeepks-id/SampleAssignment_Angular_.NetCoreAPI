using System.ComponentModel.DataAnnotations;

namespace AggregateCalculator.WebApi.Models.CalculatedResult
{
    public class CalculationInputModel
    {
        [Required]
        public string InputValues { get; set; }
    }
}
