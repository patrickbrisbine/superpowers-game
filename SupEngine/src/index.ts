import * as THREE from "three";
(<any>THREE.Euler).DefaultOrder = "YXZ";

import GameInstance from "./GameInstance";
import ActorTree from "./ActorTree";
import Actor from "./Actor";
import ActorComponent from "./ActorComponent";

import Input from "./Input";
import Audio from "./Audio";
import SoundPlayer from "./SoundPlayer";

export {
  THREE,
  GameInstance, ActorTree, Actor, ActorComponent,
  Input, Audio, SoundPlayer
};

import Camera2DControls from "./components/Camera2DControls";
import Camera3DControls from "./components/Camera3DControls";
import FlatColorRenderer from "./components/FlatColorRenderer";
import GridRenderer from "./components/GridRenderer";
import SelectionRenderer from "./components/SelectionRenderer";

export let editorComponentClasses: { [name: string]: new(...args: any[]) => ActorComponent } = {
  Camera2DControls, Camera3DControls, FlatColorRenderer, GridRenderer, SelectionRenderer
};

export function registerEditorComponentClass(name: string, componentClass: new(...args: any[]) => ActorComponent) {
  if (editorComponentClasses[name] != null) {
    console.error(`SupEngine.registerEditorComponent: Tried to register two or more classes named "${name}"`);
    return;
  }

  editorComponentClasses[name] = componentClass;
};

import Camera from "./components/Camera";

export let componentClasses: { [name: string]: new(...args: any[]) => ActorComponent } = {
  /* Built-ins */ Camera
};

export function registerComponentClass(name: string, plugin: new(...args: any[]) => ActorComponent) {
  if (componentClasses[name] != null) {
    console.error(`SupEngine.registerComponentClass: Tried to register two or more classes named "${name}"`);
    return;
  }

  componentClasses[name] = plugin;
};

export let earlyUpdateFunctions: {[name: string]: Function} = {};
export function registerEarlyUpdateFunction(name: string, callback: Function) {
  if (earlyUpdateFunctions[name] != null) {
    console.error(`SupEngine.registerEarlyUpdateFunction: Tried to register two or more functions named "${name}"`);
    return;
  }

  earlyUpdateFunctions[name] = callback;
};
