using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using court.Models;

namespace court.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Menu()
        {
            return View();
        }

        public IActionResult Maps()
        {
            return View();
        }

        public IActionResult Conduct()
        {
            return View();
        }
        public IActionResult Docket()
        {
            return View();
        }

        public IActionResult Docket2()
        {
            return View();
        }

        public IActionResult Judges()
        {
            return View();
        }

        public IActionResult Faqs()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
