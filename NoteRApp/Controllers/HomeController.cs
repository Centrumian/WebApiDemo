using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NoteRApp.Models;

namespace NoteRApp.Controllers
{
    public class HomeController : Controller
    {
        NoteContext db;
        public HomeController(NoteContext noteContext)
        {
            db = noteContext;
        }

        public IActionResult Index()
        {
            Note n = new Note()
            {
                Header = "Greetin message",
                Content = "Hello all!",
                CreationDate = DateTime.Now
            };
                db.Notes.Add(n);
            db.SaveChanges();

            return View();
        }

        public IActionResult Privacy()
        {
            //var n = db.Notes.FirstOrDefault();
            //if (n != null)
            //{
            //    return $"Header : {n.Header}; Content = {n.Content}; CreationDate = {n.CreationDate}";
            //}
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
