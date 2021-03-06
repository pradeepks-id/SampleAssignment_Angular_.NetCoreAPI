using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AggregateCalculator.WebApi.Lib
{
    public class UnprocessableObjectResult : ObjectResult
    {
        public UnprocessableObjectResult(object value) 
            : base(value)
        {
            StatusCode = StatusCodes.Status422UnprocessableEntity;
        }

        public UnprocessableObjectResult(ModelStateDictionary modelState) 
            : this(new SerializableError(modelState))
        { }
    }
}
