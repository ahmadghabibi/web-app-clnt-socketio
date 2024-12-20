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

            var commands = new List<CmdList>()
            {
                new CmdList { label="Y", value=1 },
                new CmdList { label="y" ,value=2},
                new CmdList { label="V" ,value=3},
                new CmdList { label="v" ,value=4},
                new CmdList { label="R" ,value=5},
                new CmdList { label="r" ,value=6},
                new CmdList { label="G" ,value=7},
                new CmdList { label="g" ,value=8},
                new CmdList { label="B" ,value=9},
                new CmdList { label="b" ,value=10}

            };
            return Ok(commands);
        }
    }
}