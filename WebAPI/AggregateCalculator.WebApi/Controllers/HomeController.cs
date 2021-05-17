using AggregateCalculator.WebApi.Lib;
using AggregateCalculator.WebApi.Models.CalculatedResult;
using AggregateCalculator.WebApi.OtherLayers;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace AggregateCalculator.WebApi.Controllers
{
    
    public class HomeController : BaseController
    {
        private readonly ICalculatedResultService service;
        private readonly IHostingEnvironment _env;

        public HomeController(ICalculatedResultService service, IHostingEnvironment env)
        {
            this.service = service;
            _env = env;
        }

        [HttpGet]
        [Route("api/home/results")]
        public IActionResult Get()
        {
            var model = service.GetResults();

            var outputModel = ToOutputModel(model);
            return Ok(outputModel);
        }

        [HttpPost]
        [Route("api/home/Calculate")]
        public IActionResult CalculateAggregateResult([FromBody]CalculationInputModel inputModel)
        {
            try
            {
                if (inputModel == null)
                    return BadRequest();

                if (!ModelState.IsValid)
                    return Unprocessable(ModelState);

                var model = ToDomainModel(inputModel);
                var calcmodel = service.CalculateResult(model);

                var outputModel = ToOutputModel(calcmodel);
                return Ok(outputModel);
            }
            catch(Exception ex)
            {                
                string logFilePath = Path.Combine(_env.ContentRootPath, "Logs"); 
                ErrorLogger.LogErrorToText(ex, logFilePath);
                return Ok();
            }
        }

        #region " Mappings "

        private CalculatedResultModel ToOutputModel(CalculatedResult model)
        {
            return new CalculatedResultModel
            {
                minvalue = model.MinValue,
                maxvalue = model.MaxValue,
                averagevalue = model.AverageValue,
                inputvalues = model.InputValues
            };
        }

        private List<CalculatedResultModel> ToOutputModel(List<CalculatedResult> model)
        {
            return model.Select(item => ToOutputModel(item))
                        .ToList();
        }
        private CalculatedResult ToDomainModel(CalculationInputModel inputModel)
        {
            return new CalculatedResult
            {
                MinValue = 0,
                MaxValue = 0,
                AverageValue = 0,
                InputValues = inputModel.InputValues
            };
        }
        #endregion
    }
}
