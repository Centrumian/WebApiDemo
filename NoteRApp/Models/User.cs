using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NoteRApp
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(25)]
        [MinLength(3)]
        public string Name { get; set; }

        [Required]
        [Range(18,100)]
        public int Age { get; set; }

        public DateTime RegistryDate { get; set; }

        public PersonGender Gender { get; set; }

        public bool IsAdmin { get; set; }
    }

    public enum PersonGender
    {
        Male,
        Female
    }
}
