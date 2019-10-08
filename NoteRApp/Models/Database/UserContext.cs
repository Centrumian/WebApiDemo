using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteRApp.Models.Database
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User() { Id = 1, Name = "Bob", Age = 18, Gender = PersonGender.Male, RegistryDate = DateTime.Now, IsAdmin = true },
                new User() { Id = 2, Name = "Alex", Age = 20, Gender = PersonGender.Male, RegistryDate = new DateTime(2000, 12, 10) },
                new User() { Id = 3, Name = "Lisa", Age = 30, Gender = PersonGender.Female, RegistryDate = DateTime.Now }
                );
        }

        public DbSet<User> Users { get; set; }
    }
}
