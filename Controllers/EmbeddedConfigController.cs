using EmbeddedApiDemo.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmbeddedApiDemo.Controllers
{
    [Route("api/EmbeddedConfig")]
    [ApiController]
    public class EmbeddedConfigController : ControllerBase
    {
        public EmbeddedConfigController()
        {
            
        }
        [HttpGet]
        public IActionResult Get()
        {

            var commands = new List<EmbeddedCmds>()
            {
                new EmbeddedCmds { label="Y", value=1 },
                new EmbeddedCmds { label="y" ,value=2},
                new EmbeddedCmds { label="V" ,value=3},
                new EmbeddedCmds { label="v" ,value=4},
                new EmbeddedCmds { label="R" ,value=5},
                new EmbeddedCmds { label="r" ,value=6},
                new EmbeddedCmds { label="G" ,value=7},
                new EmbeddedCmds { label="g" ,value=8},
                new EmbeddedCmds { label="B" ,value=9},
                new EmbeddedCmds { label="b" ,value=10}

            };
            return Ok(commands);
        }
    }
}