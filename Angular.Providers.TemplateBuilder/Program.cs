using System;
using Angular.Providers.TemplateBuilder.Builder;
using Angular.Providers.Web.Controllers;

namespace Angular.Providers.TemplateBuilder
{
    // Created using https://github.com/danmalcolm/NonHttpRunTimeRazorSupport
    public class Program
    {
        static Uri BaseUri = new Uri("http://www.example.com");

        public static void Main(string[] args)
        {
            ViewRenderer renderer = ViewRenderer.ForAssemblyOf<HomeController>();

            string content = renderer.RenderView(args[0], null, BaseUri);

            Console.WriteLine(content);
        }
    }
}
