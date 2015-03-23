﻿using System.Web.Mvc;

namespace Angular.Providers.TemplateBuilder.Builder
{
    /// <summary>
    /// "Placeholder" controller type used to initialise ControllerContext when executing a 
    /// precompiled Razor template outside of a web application
    /// </summary>
    internal class PlaceholderController : Controller
    {
        public ActionResult Index()
        {
            return null;
        } 
    }
}