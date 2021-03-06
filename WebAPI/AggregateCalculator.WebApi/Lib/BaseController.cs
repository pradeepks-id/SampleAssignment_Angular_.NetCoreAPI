using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AggregateCalculator.WebApi.Lib
{
    public class BaseController : Controller
    {
        [NonAction]
        public UnprocessableObjectResult Unprocessable(ModelStateDictionary modelState)
        {
            return new UnprocessableObjectResult(modelState);
        }

        [NonAction]
        public ObjectResult Unprocessable(object value)
        {
            return new UnprocessableObjectResult(value);
        }

        [NonAction]
        public IActionResult OkOrNotFound(object model)
        {
            return (model == null) ? NotFound() : (IActionResult)Ok(model);
        }
    }
}
