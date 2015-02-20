using System.Web.Mvc;

namespace Angular.Providers.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Invoice()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
    }
}