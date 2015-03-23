using System;
using System.Web.Mvc;

namespace Angular.Providers.TemplateBuilder.Builder
{
    internal class ViewPageActivator : IViewPageActivator
    {
        public object Create(ControllerContext controllerContext, Type type)
        {
            return Activator.CreateInstance(type);
        }
    }
}
