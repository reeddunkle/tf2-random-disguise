# TF2 Random Disguise

One time I saw him behind our lines. As I was trying to get my team to notice him, he disappeared behind an obstacle, and re-appeared disguised as a new class. He did this a few times, and at first I was able to keep track of him, but eventually I had no idea which class he was disguised as. He really threw me off his trail.

This script generates a random class to disguise as every second, and writes a TF2 script to a file named `randClass.cfg` which will disguise you as the class generated that second.

## Use it

The simplest way to use this would be to add these two lines to your `autoexec.cfg`. Change `ALT` to be the key of your choice:

```
# autoexec.cfg

alias disguiseRandomEnemy "exec randClass;"
bind ALT disguiseRandomEnemy
```

[My setup](https://github.com/reeddunkle/cfg/blob/master/reset.cfg#L13) is a little convoluted because I have this set to "Shift+MOUSE4" (I use MOUSE4 to disguise as last).

## Setup

### Clone the repo:

```
git clone https://github.com/reeddunkle/tf2-random-disguise.git
```

### Set your path:

The default path to which the file is written is:

```
C:\Program Files (x86)\Steam\steamapps\common\Team Fortress 2\tf\cfg\randClass.cfg
```

If your `cfg` folder is somewhere else, you need to open `cfg_path.js`, and change it. Remember to use an extra `\` to escape the path slashes. (This is true even if you're on a Mac/Linux using forward slashes.)

Also note that the name of the TF2 script file is specified at the end of this path. Thus, to use the script, in TF2 you'll run `exec randClass`.

### Customize random class pool

In `index.js`, notice the `CLASSES_IN_POOL` variable:

```
# index.js

var CLASSES_IN_POOL = [
  CLASSES.scout,
  CLASSES.sniper,
  // CLASSES.soldier,
  CLASSES.demoman,
  CLASSES.medic,
  // CLASSES.heavy,
  CLASSES.pyro,
  CLASSES.spy,
  CLASSES.engineer
];
```

I have the Soldier and the Heavy commented out. This means I exclude them from the pool of classes I pick from as the script runs. You can comment and uncomment those classes in `index.js` to adjust the pool to your liking.

## Run it

Inside the `tf2-random-disguise` directory, execute:

```
node index.js
```

## Requirements

You've got to have node installed: <https://nodejs.org/en/download/>

## Notes

This was more of a exercise than a practical tool. I don't run it because the majority of the time it's needlessly consuming resources. This would be much more powerful if, rather than running this script on an infinite loop, I could generate the `randClass.cfg` contents upon demand.

This would also allow me to have a history of the previous classes generated, and I could ensure each time I use the cfg script that I'm disguising as a new class.

If there were a way to generate a random number in TF2 scripts, I could move all of this over to in-game scripting. But I haven't seen a way to do that.

## How it works

>From <https://wiki.teamfortress.com/wiki/Scripting#Disguising>


The `disguise` command takes two arguments, the first is the class and the second is the team.

Class
* `1` Scout
* `2` Sniper
* `3` Soldier
* `4` Demoman
* `5` Medic
* `6` Heavy
* `7` Pyro
* `8` Spy
* `9` Engineer

Team
* `1` BLU team
* `2` RED team
* `-1` Opposite team
* `-2` Same team

Thus, `disguise 5 1` would disguise as a BLU Medic and `disguise 7 -2` would disguise as a friendly Pyro.
