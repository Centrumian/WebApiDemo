using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NoteRApp.Models;
using NoteRApp.Models.Database;

namespace NoteRApp.Controllers
{
    public class HomeController : Controller
    {
        IUserRepository repository;
        public HomeController(IUserRepository userRepository)
        {
            repository = userRepository;
        }

        [Route("api/users")]
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return repository.GetUsers();
        }

        [HttpGet]
        public void Add(string name)
        {
            User user = new User() { Name = name };
            repository.Create(user);
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
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
