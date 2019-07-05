using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteRApp
{
    public class Note
    {
        public int Id { get; set; }

        public string Header { get; set; }

        public string Content { get; set; }

        public User Owner { get; set; }

        public DateTime CreationDate { get; set; }
    }
}
