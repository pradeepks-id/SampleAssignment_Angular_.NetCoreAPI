using AggregateCalculator.WebApi.OtherLayers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Server.IISIntegration;

namespace AggregateCalculator.WebApi
{
    public class Startup
    {
        public void ConfigureServices(
            IServiceCollection services)
        {//Addded for Cors-issue fix//
            services.AddCors(options =>
            {
                options.AddPolicy(
                  "CorsPolicy",
                  builder => builder.WithOrigins("http://localhost:4200")
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials());
            });
            services.AddAuthentication(IISDefaults.AuthenticationScheme);
        //Addded for Cors-issue fix//

            services.AddSingleton<ICalculatedResultService, CalculatedResultService>();

            services.AddMvc();
        }

        public void Configure(
            IApplicationBuilder app, 
            IHostingEnvironment env)
        {
            //Addded for Cors-issue fix//
            app.UseCors("CorsPolicy");
            //Addded for Cors-issue fix//
            app.UseExceptionHandler(configure =>
            {
                configure.Run(async context =>
                {
                    var ex = context.Features
                                    .Get<IExceptionHandlerFeature>()
                                    .Error;

                    context.Response.StatusCode = 500;
                    await context.Response.WriteAsync($"{ex.Message}");
                });
            });

            app.UseMvcWithDefaultRoute();
        }
    }
}
