using System;
using System.IO;
using RazorEngine;
using RazorEngine.Templating;

namespace Angular.Providers.TemplateBuilder
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                var cshtmlContent = File.ReadAllText(args[0]);
                string content = Engine.Razor.RunCompile(cshtmlContent, "templateKey", null, new {});
                Console.WriteLine(content);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex.Message);
            }            
        }
    }
}
