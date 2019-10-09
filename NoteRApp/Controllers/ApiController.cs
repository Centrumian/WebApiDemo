using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NoteRApp.Models.Database;

namespace NoteRApp.Controllers
{
    public class ApiController : Controller
    {
        IUserRepository repository;
        public ApiController(IUserRepository userRepository)
        {
            repository = userRepository;
        }

        [HttpGet]
        public IEnumerable<User> Users()
        {
            return repository.GetUsers();
        }

        [HttpGet]
        public IEnumerable<User> FilteredUsers(string fstr)
        {
            return repository.GetFilteredUsers(fstr);
        }
    }
}