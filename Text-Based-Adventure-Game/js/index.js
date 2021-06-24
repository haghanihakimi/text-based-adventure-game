/*JavaScripts for Styling Page By Haghani Hakimi*/

const global = new Vue({
  el:"",
  data(){
    return{
      //Player details
      player: {
        name: null,
        level: 1,
        hp: null,
        maxHp: null,
        str: null,
        dex: null,
        energy: null,
        maxEnergy: null,
        xp: null,
        xpCap: null,
        buffs: {
          hp_buff: 0,
          str_buff: 0,
          dex_buff: 0,
          energy_buff: 0
        },
        inventory: [
            {name: 'Potion', hp: 15, qty: 3 },
            {name: 'shield', str: 2, hp: 2, dex: 0, energy: 0, qty: 1, equipped: false},
        ],
      },
      //Quests - active and completed arrays
      active_quests: [
        {name: 'Finding a Weapon'}
      ],
      completed_quests: [

      ],
      //Arrays for stats [levelling up]
      arrHp: [
         {hp: 0, maxHp: 0},
         {hp: 20, maxHp: 34},
         {hp: 37, maxHp: 37},
         {hp: 40, maxHp: 40},
         {hp: 44, maxHp: 44},
         {hp: 46, maxHp: 46}
      ],
      arrStr: [
        {str: 0},
        {str: 13},
        {str: 15},
        {str: 18},
        {str: 21},
        {str: 25}
      ],
      arrDex: [
        {dex: 0},
        {dex: 12},
        {dex: 14},
        {dex: 16},
        {dex: 19},
        {dex: 22}
      ],
      arrEnergy: [
        {energy: 0},
        {energy: 15},
        {energy: 18},
        {energy: 21},
        {energy: 23},
        {energy: 26}
      ],
      arrXPcap: [
        {xpCap: 0},
        {xpCap: 25},
        {xpCap: 50},
        {xpCap: 125},
        {xpCap: 190},
        {xpCap: 270}
      ],
      //enemy array
      enemy:{
        Goblin: {
          enemy_name: "Goblin", 
          enemy_hp: 22, 
          enemy_str: 6, 
          enemy_dex: 8, 
          xp_gain: 12
        }
      }
    }
  },
  methods: {
    //insert information into player
    buildChar: function(name){
        this.player.name = name;
        this.player.hp = this.arrHp[this.player.level].hp;
        this.player.maxHp = this.arrHp[this.player.level].maxHp;
        this.player.str = this.arrStr[this.player.level].str;
        this.player.dex = this.arrDex[this.player.level].dex;
        this.player.energy = this.arrEnergy[this.player.level].energy;
        this.player.maxEnergy = this.arrEnergy[this.player.level].energy;
        this.player.xp = 0;
        this.player.xpCap = this.arrXPcap[this.player.level].xpCap;
    },
  },
  created: function() {
    //use method on the first instance of loading the page
    this.buildChar("John Doe");
  }
})



const nav_styles = new Vue({
  el: "#nav_styles",
  data(){
    return{
      rect_top: 360,
      rect_mid: 500,
      rect_down: 360,
      rect_x: 0,
      menu_right: "-100",
      menu_opacity: 0,
      menu_toggle:false,
      name: global.player.name,
      hp: global.arrHp[global.player.level].hp,
      maxHp: global.arrHp[global.player.level].maxHp,
      level: global.player.level,
      xp: global.player.xp,
      xpCap: global.player.xpCap,
      str: global.player.str,
      energy: global.player.energy,
      maxEnergy: global.player.maxEnergy,
      dex: global.player.dex,
      activeQ: global.active_quests,
      completedQ: global.completed_quests
    }
  },
  methods:{
    toggle_menu:function(){
      if(this.menu_toggle){
        this.rect_top = 360;
        this.rect_mid = 500;
        this.rect_down = 360;
        this.menu_right = "-100";
        this.menu_opacity = 0;
        this.rect_x = 0;
        menu_list.menu_opacity = 0;
        menu_list.menu_right = "-100";
        this.menu_toggle = false;
      }else{
        this.rect_top = 500;
        this.rect_mid = 300;
        this.rect_down = 500;
        this.menu_right = "0";
        this.menu_opacity = 1;
        this.rect_x = 130;
        menu_list.menu_opacity = 1;
        menu_list.menu_right = "0";
        this.menu_toggle = true;
        media_menu_list.top = 130;
        media_menu_list.opacity = 0;
        media_menu_list.z_index = 0;
        media_menu_list.status = false;
      }
    },
    show_media_menu:function(){
      var media_width = this.$refs.media_width.clientWidth;
      if(media_width <= 925){
        if(media_menu_list.status){
          media_menu_list.top = 130;
          media_menu_list.opacity = 0;
          media_menu_list.z_index = 0;
          media_menu_list.status = false;
        }else{
          media_menu_list.top = 99;
          media_menu_list.opacity = 1;
          media_menu_list.z_index = 1;
          media_menu_list.status = true;
          this.rect_top = 360;
          this.rect_mid = 500;
          this.rect_down = 360;
          this.menu_right = "-100";
          this.menu_opacity = 0;
          this.rect_x = 0;
          menu_list.menu_opacity = 0;
          menu_list.menu_right = "-100";
          this.menu_toggle = false;
        }
      }
    },
    hide_media_menu:function(){
      var media_width = this.$refs.media_width.clientWidth;
      if(media_width > 925){
        media_menu_list.top = 130;
        media_menu_list.opacity = 0;
        media_menu_list.z_index = 0;
        media_menu_list.status = false;
      }
    }
  },
  mounted(){
    this.hide_media_menu;
    window.addEventListener("resize",this.hide_media_menu);
  },
  destroyed(){
    this.hide_media_menu;
    window.addEventListener("resize",this.hide_media_menu);
  }
});
const menu_list = new Vue({
  el: "#menu_list",
  data(){
    return{
      menu_opacity: 0,
      menu_right: "-100",
      inventory: global.player.inventory,
      active_quests: global.active_quests,
      completed_quests: global.completed_quests
    }
  },
  methods:{
    show_instructions:function(){
      instruction_js.show_instructions = true;
    }
  }
});
const instruction_js = new Vue({
  el: "#instruction_js",
  data(){
    return{
      show_instructions: false
    }
  },
  methods:{
    close_instructions:function(){
      this.show_instructions = false;
    }
  }
});


const chat_text = new Vue({
  el: "#chat_text",
  data(){
    return{

      text_chat_height: 0,
      //Current picked location
      currentLocation: {
        name: null,
        desc: null,
        look: null,
        action: null,
        input: null,
        visited: null
      },
      //Locations
      //Name, description of area, places you are able to go to, items to take, look
      locations: {
          one: {
              name: 'Sandy Shore',
              desc: 'You awaken on a beach with the sun beaming down upon you. You are not quite sure how you ended up here.'+
                      'To the north in the distance you see a small town, to the south is the ocean,'+
                      ' to the east is more of the coastline, and to the west there seems to be a forest',
              north: 'three',
              south: 'two',
              east: 'five',
              west: 'four',
              take: null,
              look: null,
              visited: false
          },

          two: {
              name: 'Sandy Shore - Ocean',
              desc: 'You see nothing but the ocean and a small wooden boat that has seen better days.',
              north: 'one',
              south: null,
              east: null,
              west: null,
              look: 'You look closer at the boat and see something reflective',
              take: {
                  name: "dagger",
                  str: 4,
                  hp: 0,
                  dex: 0,
                  energy: 0,
                  qty: 1,
                  quest_name: 'Finding a Weapon',
                  quest_completed: false,
                  equipped: false,
                  quest_xp: 30
              },
              visited: false
          },

          three: {
              name: 'Small Town - Path',
              desc: 'You travel down the dirt path that continues to the town in the distance.',
              north: null,
              south: 'one',
              east: null,
              west: null,
              look: 'On the sides the path there are growing fruit trees.',
              take: {
                  name: "fruit",
                  hp: 5,
                  qty: 1
              },
              visited: false
          },

          four: {
              name: 'Sandy Shore - Forest',
              desc: 'You travel west down the sand and reach terrain with long grass. Trees located to the west are overgrown, blocking out light from the sun.',
              north: null,
              south: null,
              east: 'one',
              west: null,
              look: 'There seems to be nothing of note here.',
              take: null,
              visited: false
          },
        },
        arrdesc: [

        ],
        arrinput: [
          
        ],
        arrEnemy: [

        ],

    //Input for commands (directions etc.)
    userInput: null
    }
  },
  methods: {
    //Random roll each movement to check for randomized enemy
    rollD20: function(){
      var d20 = Math.floor(Math.random()*20+1);
      if(d20 > 1)
      {
        alert("An enemy approaches!");
        this.enemyBattle();
      }
    },
    //Check XP for level up
    checkLevel: function(){
      if(nav_styles.xp >= nav_styles.xpCap || media_menu_list.xp >= media_menu_list.xpCap)
      {
        //Update player level if xp is equal to or past the xp cap
        global.player.level = global.player.level + 1;
        nav_styles.level = global.player.level;
        media_menu_list.level = global.player.level;
        
        if(nav_styles.xp > nav_styles.xpCap || media_menu_list.xp > media_menu_list.xpCap)
        {
          //if xp is greater than cap - apply the difference to next level xp
          var xpChange = nav_styles.xp - nav_styles.xpCap;
          nav_styles.xp = 0;
          media_menu_list.xp = 0;
          nav_styles.xp += xpChange;
          media_menu_list.xp += xpChange;
        }
        else if(nav_styles.xp == nav_styles.xpCap || media_menu_list.xp == media_menu_list.xpCap)
        {
          nav_styles.xp = 0;
          media_menu_list.xp = 0;
        }
        alert("You have levelled up!");
        //update stats
        this.levelUp();
      }
    },
    levelUp: function() {

        //updates player stats and pushes them to the navigation bar and mobile view menu to display

        global.player.hp = global.arrHp[global.player.level].hp + global.player.buffs.hp_buff;
        global.player.maxHp = global.arrHp[global.player.level].maxHp + global.player.buffs.hp_buff;
        global.player.str = global.arrStr[global.player.level].str + global.player.buffs.str_buff;
        global.player.dex = global.arrDex[global.player.level].dex + global.player.buffs.dex_buff;
        global.player.energy = global.arrEnergy[global.player.level].energy + global.player.buffs.energy_buff;
        global.player.maxEnergy = global.arrEnergy[global.player.level].energy + global.player.buffs.energy_buff;
        global.player.xpCap = global.arrXPcap[global.player.level].xpCap;

        nav_styles.hp = global.player.hp;
        nav_styles.maxHp = global.player.maxHp;
        nav_styles.str = global.player.str;
        nav_styles.dex = global.player.dex;
        nav_styles.energy = global.player.energy;
        nav_styles.maxEnergy = global.player.maxEnergy;
        nav_styles.xpCap = global.player.xpCap;

        media_menu_list.hp = global.player.hp;
        media_menu_list.maxHp = global.player.maxHp;
        media_menu_list.str = global.player.str;
        media_menu_list.dex = global.player.dex;
        media_menu_list.energy = global.player.energy;
        media_menu_list.maxEnergy = global.player.maxEnergy;
        media_menu_list.xpCap = global.player.xpCap;
    },
    enemyBattle: function()
    {
      //Pull goblin stats from enemy
        var enemyName = global.enemy.Goblin.enemy_name;
        var enemyHp = global.enemy.Goblin.enemy_hp;
        var enemyStr = global.enemy.Goblin.enemy_str;

        var fighting = true;
        alert("Its a " + enemyName +"!");

        //continue the battle until the player or the enemy loses all hp
        while(fighting)
        {
          var action = prompt("What would you like to do?");
          if(action == "attack")
          {
              //user attack
              var attack = Math.floor(Math.random()*(global.player.str)+1);
              //enemy attack
              var enemy_attack = Math.floor(Math.random()*(enemyStr)+1);
              //update player hp and enemy hp
              enemyHp = enemyHp - attack;
              global.player.hp = global.player.hp - enemy_attack;
              media_menu_list.hp = global.player.hp;
              nav_styles.hp = global.player.hp;
              
              //display
              alert("player HP: " + global.player.hp + "/" + global.player.maxHp + 
              "\nEnemy HP: " + enemyHp + "/" + global.enemy.Goblin.enemy_hp + 
              "\nYou attacked the goblin and dealt " + attack + "damage" + 
              "\nThe goblin attacked you and hit you for " + enemy_attack + "damage");

              //Win - if enemy hit points falls to or below 0:
              if(enemyHp <= 0)
              {
                alert("You won! You gained " + global.enemy.Goblin.xp_gain + "XP");
                global.player.xp = global.player.xp + global.enemy.Goblin.xp_gain;
                nav_styles.xp = global.player.xp;
                media_menu_list.xp = global.player.xp;
                fighting = false;
                break;
              }
              //lose - if player hp falls below 0:
              else if(global.player.hp <= 0)
              {
                alert("Game over. You have died.");
                location.reload();
                break;
              }
          }
          else{
            alert("Try typing 'attack'");
          }
        }
    },
    useItem: function(item){
        switch(item){
            case "use potion":
            case "use Potion":
            
            //if player hp is more or equal to 15 vs maxHP
                if(media_menu_list.hp < media_menu_list.maxHp && (media_menu_list.maxHp - media_menu_list.hp) >= 15)
                {
                  global.player.hp += global.player.inventory[0].hp;
                  media_menu_list.hp = global.player.hp;
                  nav_styles.hp = global.player.hp;
                  this.currentLocation.desc = "You have used a potion and gained 15 HP";
                  global.player.inventory[0].qty -= 1;
                }
                //if player hp is less than maxhp
                else if(media_menu_list.hp < media_menu_list.maxHp)
                {
                    var hpdif = (media_menu_list.maxHp - media_menu_list.hp);
                    global.player.hp += hpdif;
                    nav_styles.hp += hpdif;
                    media_menu_list.hp += hpdif;
                    this.currentLocation.desc = "You have used a potion and gained " + hpdif + "HP";
                    global.player.inventory[0].qty -= 1;
                }
                else if(global.player.inventory[0].qty == 0)
                {
                    this.currentLocation.desc = "You don't have any potions left";
                }
                else
                    this.currentLocation.desc = "You are at full health";
                break;
            default:
                this.currentLocation.desc = "There is no such action for " + this.currentLocation.input;
        }
    },
    takeItem: function(item){
      
      if(this.currentLocation.take !== null)
      {
          //Push item into inventory
          this.currentLocation.desc = '\n' + "You have obtained: " + this.currentLocation.take.name;
          global.player.inventory.push(this.currentLocation.take);
          //If the item is a quest item - quest name variable
          if(this.currentLocation.take.quest_completed == false)
          {
            var i = 0;
            
            for(i = 0; i < global.active_quests.length; i++)
            {
              if(this.currentLocation.take.quest_name == global.active_quests[i].name)
              {
                global.completed_quests.push(global.active_quests[i]);
                global.active_quests.splice(global.active_quests[i].name, 1);
                nav_styles.xp += this.currentLocation.take.quest_xp;
                media_menu_list.xp += this.currentLocation.take.quest_xp;
              }
            }
            this.currentLocation.take.quest_completed = true;
          }
      }
      else
      {
          this.currentLocation.desc = '\n' + "There is no item here";
      }
      this.currentLocation.take = null;
    },
    equipItem: function(item){
      var i;

      res = item.split(" ");

      switch(res[1]){
        case 'dagger':
        case 'shield':
        
          for(i = 0; i < global.player.inventory.length; i++)
          {
            if(global.player.inventory[i].name == res[1])
            {
              if(global.player.inventory[i].equipped == false)
              {
                global.player.buffs.str_buff += global.player.inventory[i].str;
                global.player.buffs.hp_buff += global.player.inventory[i].hp;
                global.player.maxHp = global.player.maxHp + global.player.buffs.hp_buff;
                global.player.str = global.player.str + global.player.inventory[i].str;

                this.currentLocation.desc = res[1] + " has been equipped";
                global.player.inventory[i].equipped = true;
              }
              else if(global.player.inventory[i].equipped == true)
              {
                global.player.buffs.str_buff -= global.player.inventory[i].str;
                global.player.buffs.hp_buff -= global.player.inventory[i].hp;
                global.player.maxHp = global.player.maxHp - global.player.inventory[i].hp;
                if(global.player.maxHp < global.player.hp)
                {
                  global.player.hp = global.player.maxHp;
                }
                global.player.str = global.player.str - global.player.inventory[i].str;

                this.currentLocation.desc = res[1] + " has been unequipped";
                global.player.inventory[i].equipped = false;
              }
            }
              media_menu_list.str = global.player.str;
              nav_styles.str = global.player.str;
              media_menu_list.maxHp = global.player.maxHp;
              nav_styles.maxHp = global.player.maxHp;
              media_menu_list.hp = global.player.hp;
              nav_styles.hp = global.player.hp;
          } 
          break;
        default:
          this.currentLocation.desc = "There is nothing to equip by that name";
          break;
      }
      
    },
    //method to use userInput commands in the game
    performAction: function() {
        console.log(this.currentLocation);
            switch(this.userInput) {
                //Choosing to go north
                case 'north':
                case 'up':
                    if(this.currentLocation.north !== null){
                        this.currentLocation = this.locations[this.currentLocation.north];
                        this.currentLocation.input = "You went north.";
                        if(this.currentLocation.visited == false)
                        {
                          this.currentLocation.action = this.currentLocation.desc;
                          this.currentLocation.visited = true;
                        }
                        else
                        {
                          this.currentLocation.desc = this.currentLocation.action;
                        }
                          
                        this.rollD20();
                    }
                    //if there is no path
                    else
                    {
                        this.currentLocation.input = "There is no clear path north of here.";
                    }
                    break;
                //Choosing to go south
                case 'south':
                case 'down':
                    if(this.currentLocation.south !== null){
                        this.currentLocation = this.locations[this.currentLocation.south];
                        this.currentLocation.input = "You went south.";
                        if(this.currentLocation.visited == false)
                        {
                          this.currentLocation.action = this.currentLocation.desc;
                          this.currentLocation.visited = true;
                        }
                        else
                        {
                          this.currentLocation.desc = this.currentLocation.action;
                        }
                        this.rollD20();
                    }
                    //if there is no path
                    else
                    {
                        this.currentLocation.input = "There is no clear path south of here.";
                    }
                    break;
                //Choosing to go east
                case 'east':
                case 'right':
                    if(this.currentLocation.east !== null){
                        this.currentLocation = this.locations[this.currentLocation.east];
                        this.currentLocation.input = "You went east.";
                        if(this.currentLocation.visited == false)
                        {
                          this.currentLocation.action = this.currentLocation.desc;
                          this.currentLocation.visited = true;
                        }
                        else
                        {
                          this.currentLocation.desc = this.currentLocation.action;
                        }
                        this.rollD20();
                    }
                    //if there is no path
                    else
                    {
                        this.currentLocation.input = "There is no clear path east of here.";
                    }
                    break;
                //Choosing to go west
                case 'west':
                case 'left':
                    if(this.currentLocation.west !== null){
                        this.currentLocation = this.locations[this.currentLocation.west];
                        this.currentLocation.input = "You went west.";
                        if(this.currentLocation.visited == false)
                        {
                          this.currentLocation.action = this.currentLocation.desc;
                          this.currentLocation.visited = true;
                        }
                        else
                        {
                          this.currentLocation.desc = this.currentLocation.action;
                        }
                        this.rollD20();
                    }
                    //if there is no path
                    else
                    {
                        this.currentLocation.input = "There is no clear path west of here.";
                    }
                    break;
                case 'take':
                  this.currentLocation.input = this.userInput;
                  if(this.currentLocation.take !== null)
                  {
                    this.takeItem(this.currentLocation.take.name);
                  } 
                  else{
                    this.currentLocation.desc = "\nThere was nothing to take";
                  }
                  break;
                case 'use potion':
                    this.currentLocation.input = this.userInput;
                    this.useItem(this.userInput);
                    break;
                case 'look':
                  this.currentLocation.input = "" + this.userInput;
                  if(this.currentLocation.look !== null && this.currentLocation.take !== null)
                  {
                    this.currentLocation.desc = this.currentLocation.look;
                  }
                  else
                  {
                    this.currentLocation.desc = "There seems to be nothing here";
                  }
                  break;
                case 'equip dagger':
                case 'equip shield':
                    this.currentLocation.input = this.userInput;
                    this.equipItem(this.userInput);
                    break;
                case 'area':
                  this.currentLocation.input = this.userInput;
                  this.currentLocation.desc = "You are currently in the area of " + this.currentLocation.name;
                  break;
                case 'description':
                  this.currentLocation.input = this.userInput;
                  this.currentLocation.desc = this.currentLocation.action;
                  break;
                case 'action':
                  alert();
                  break;
                default:
                    this.currentLocation.desc = "I don't understand the query";
                    break;
            }
        this.arrinput.push(this.currentLocation.input);
        this.arrdesc.push(this.currentLocation.desc);
        this.userInput = "";
        this.checkLevel();
    }
  },
  created: function() {
    this.currentLocation = this.locations['one'];
    this.arrdesc.push(this.currentLocation.desc);
  },
  mounted(){
    this.text_chat_height = this.$refs.game_interface.clientHeight - 85 - this.$refs.interface.clientHeight;
  },

});
const media_menu_list = new Vue({
  el: "#media_menu_list",
  data(){
    return{
      top: 130,
      opacity: 0,
      z_index: 0,
      status:false,
      name: global.player.name,
      hp: global.arrHp[global.player.level].hp,
      maxHp: global.arrHp[global.player.level].maxHp,
      level: global.player.level,
      xp: global.player.xp,
      xpCap: global.player.xpCap,
      str: global.player.str,
      energy: global.player.energy,
      maxEnergy: global.player.maxEnergy,
      dex: global.player.dex,
      activeQ: global.active_quests,
      completedQ: global.completed_quests
    }
  }
});


