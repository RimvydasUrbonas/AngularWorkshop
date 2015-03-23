using System.Web;

namespace Angular.Providers.TemplateBuilder.Builder
{
    internal class OfflineBrowserCapabilities : HttpBrowserCapabilitiesBase
    {
        public override bool IsMobileDevice
        {
            get
            {
                return false;
            }
        }   

        // TODO - overrides with useful exception message
    }
}