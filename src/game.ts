import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

//Materials
const material01 = new Material()
material01.albedoColor = Color3.FromHexString("#005F73")
const material02 = new Material()
material02.albedoColor = Color3.FromHexString("#0A9396")
const material03 = new Material()
material03.albedoColor = Color3.FromHexString("#94D2BD")
const material04 = new Material()
material04.albedoColor = Color3.FromHexString("#E9D8A6")
const material05 = new Material()
material05.albedoColor = Color3.FromHexString("#EE9B00")
const material06 = new Material()
material06.albedoColor = Color3.FromHexString("#CA6702")
const material07 = new Material()
material07.albedoColor = Color3.FromHexString("#BB3E03")
const material08 = new Material()
material08.albedoColor = Color3.FromHexString("#AE2012")
const material09 = new Material()
material09.albedoColor = Color3.FromHexString("#9B2226")

//Material 001
const material001 = new Material()
      material001.metallic = 0
      material001.roughness = .5
      material001.castShadows = true

      class ColorSystem {
                  fraction:number = 0
                  direction: number = 1

                  update(dt:number){
                      this.fraction += this.direction * dt * 0.075
                      if(this.fraction > 1){
                          this.fraction = 1
                          this.direction = -1

                      } else if(this.fraction < 0){
                        this.fraction = 0
                        this.direction = 1

                    }
                      material001.albedoColor = Color4.Lerp(new Color4(0, 0, 1.5, .75), new Color4(0, 0, 1.5, 0), this.fraction)
                  }
              }

engine.addSystem(new ColorSystem())



//Material 002 short
const material002 = new Material()
    material002.metallic = 0
    material002.roughness = 1
    material002.castShadows = true

    class ColorSystem2 {
                fraction:number = 0
                direction: number = 1

                update(dt:number){
                    this.fraction += this.direction * dt * 0.01
                    if(this.fraction > 1){
                        this.fraction = 1
                        this.direction = -1

                    } else if(this.fraction < 0){
                      this.fraction = 0
                      this.direction = 1

                  }
                    material002.albedoColor = Color4.Lerp(new Color4(0, 0, .1, 1), new Color4(0, 0, 4, 1), this.fraction)
                }
            }
engine.addSystem(new ColorSystem2())

//Material 003 fast
const material003 = new Material()
    material003.metallic = 0
    material003.roughness = 1
    material003.castShadows = true

    class ColorSystem3 {
                fraction:number = 0
                direction: number = 1

                update(dt:number){
                    this.fraction += this.direction * dt * 0.05
                    if(this.fraction > 1){
                        this.fraction = 1
                        this.direction = -1

                    } else if(this.fraction < 0){
                      this.fraction = 0
                      this.direction = 1

                  }
                    material003.albedoColor = Color4.Lerp(new Color4(0, 0, .1, 1), new Color4(0, 0, 4, 1), this.fraction)
                }
            }
engine.addSystem(new ColorSystem3())

//Material 004 yellow
const material004 = new Material()
      material004.metallic = 0
      material004.roughness = .5
      material004.castShadows = true

      class ColorSystem4 {
                  fraction:number = 0
                  direction: number = 1

                  update(dt:number){
                      this.fraction += this.direction * dt * 0.1
                      if(this.fraction > 1){
                          this.fraction = 1
                          this.direction = -1

                      } else if(this.fraction < 0){
                        this.fraction = 0
                        this.direction = 1

                    }
                      material004.albedoColor = Color4.Lerp(new Color4(.99, .99, 0, .5), new Color4(1.5, 1.5, 0, .25), this.fraction)
                  }
              }

engine.addSystem(new ColorSystem4())

//Material 005 red
const material005 = new Material()
      material005.metallic = 0
      material005.roughness = .5
      material005.castShadows = true

      class ColorSystem5 {
                  fraction:number = 0
                  direction: number = 1

                  update(dt:number){
                      this.fraction += this.direction * dt * 0.1
                      if(this.fraction > 1){
                          this.fraction = 1
                          this.direction = -1

                      } else if(this.fraction < 0){
                        this.fraction = 0
                        this.direction = 1

                    }
                      material005.albedoColor = Color4.Lerp(new Color4(.5, 0, 0, .5), new Color4(1.5, 0, 0, .25), this.fraction)
                  }
              }

engine.addSystem(new ColorSystem5())

//Material 006 blue
const material006 = new Material()
      material006.metallic = 0
      material006.roughness = .5
      material006.castShadows = true

      class ColorSystem6 {
                  fraction:number = 0
                  direction: number = 1

                  update(dt:number){
                      this.fraction += this.direction * dt * 0.1
                      if(this.fraction > 1){
                          this.fraction = 1
                          this.direction = -1

                      } else if(this.fraction < 0){
                        this.fraction = 0
                        this.direction = 1

                    }
                      material006.albedoColor = Color4.Lerp(new Color4(0, 0, .5, .5), new Color4(0, 0, 1.5, .25), this.fraction)
                  }
              }

engine.addSystem(new ColorSystem6())


//textures
const texture01 = new Texture("textures/sheets/sheet01.jpg")
const sheet01 = new Material()
sheet01.albedoTexture = texture01

const texture02 = new Texture("textures/sheets/sheet02.jpg")
const sheet02 = new Material()
sheet02.albedoTexture = texture02

const texture03 = new Texture("textures/sheets/sheet04.jpg")
const sheet03 = new Material()
sheet03.albedoTexture = texture03

const texture04 = new Texture("textures/sheets/sheet06.jpg")
const sheet04 = new Material()
sheet04.albedoTexture = texture04

const texture05 = new Texture("textures/sheets/sheet07.jpg")
const sheet05 = new Material()
sheet05.albedoTexture = texture05

const texture06 = new Texture("textures/sheets/sheet10.jpg")
const sheet06 = new Material()
sheet06.albedoTexture = texture06

const texture07 = new Texture("textures/sheets/sheet11.jpg")
const sheet07 = new Material()
sheet07.albedoTexture = texture07

const texture08 = new Texture("textures/sheets/sheet13.jpg")
const sheet08 = new Material()
sheet08.albedoTexture = texture08

const texture09 = new Texture("textures/sheets/sheet14.jpg")
const sheet09 = new Material()
sheet09.albedoTexture = texture09

const texture10 = new Texture("textures/sheets/sheet15.jpg")
const sheet10 = new Material()
sheet10.albedoTexture = texture10

const texture11 = new Texture("textures/sheets/sheet17.jpg")
const sheet11 = new Material()
sheet11.albedoTexture = texture11

const texture12 = new Texture("textures/sheets/sheet18.jpg")
const sheet12 = new Material()
sheet12.albedoTexture = texture12

const texture13 = new Texture("textures/sheets/sheet19.jpg")
const sheet13 = new Material()
sheet13.albedoTexture = texture13

const texture14 = new Texture("textures/sheets/sheet20.jpg")
const sheet14 = new Material()
sheet14.albedoTexture = texture14

const texture15 = new Texture("textures/sheets/sheet21.jpg")
const sheet15 = new Material()
sheet15.albedoTexture = texture15

const texture16 = new Texture("textures/konrad/01.jpg")
const sheet16 = new Material()
sheet16.albedoTexture = texture16

const texture17 = new Texture("textures/konrad/02.jpg")
const sheet17 = new Material()
sheet17.albedoTexture = texture17

const texture18 = new Texture("textures/konrad/03.jpg")
const sheet18 = new Material()
sheet18.albedoTexture = texture18

const texture19 = new Texture("textures/wayfinding/wayfinding_01.jpg")
const wayfind01 = new Material()
wayfind01.albedoTexture = texture19
wayfind01.metallic = 0
wayfind01.roughness = 1

const texture20 = new Texture("textures/wayfinding/wayfinding_02.jpg")
const wayfind02 = new Material()
wayfind02.albedoTexture = texture20
wayfind02.metallic = 0
wayfind02.roughness = 1

const texture21 = new Texture("textures/wayfinding/wayfinding_03.jpg")
const wayfind03 = new Material()
wayfind03.albedoTexture = texture21
wayfind03.metallic = 0
wayfind03.roughness = 1

const texture22 = new Texture("textures/wayfinding/wayfinding_04.jpg")
const wayfind04 = new Material()
wayfind04.albedoTexture = texture22
wayfind04.metallic = 0
wayfind04.roughness = 1

const texture23 = new Texture("textures/wayfinding/wayfinding_05.jpg")
const wayfind05 = new Material()
wayfind05.albedoTexture = texture23
wayfind05.metallic = 0
wayfind05.roughness = 1

const texture24 = new Texture("textures/wayfinding/wayfinding_06.jpg")
const wayfind06 = new Material()
wayfind06.albedoTexture = texture24
wayfind06.metallic = 0
wayfind06.roughness = 1

const texture25 = new Texture("textures/wayfinding/wayfinding_07.jpg")
const wayfind07 = new Material()
wayfind07.albedoTexture = texture25
wayfind07.metallic = 0
wayfind07.roughness = 1

const texture26 = new Texture("textures/wayfinding/wayfinding_08.jpg")
const wayfind08 = new Material()
wayfind08.albedoTexture = texture26
wayfind08.metallic = 0
wayfind08.roughness = 1

const texture27 = new Texture("textures/wayfinding/wayfinding_09.jpg")
const wayfind09 = new Material()
wayfind09.albedoTexture = texture27
wayfind09.metallic = 0
wayfind09.roughness = 1










//State 00 - Parent
let state00 = new Entity()
engine.addEntity(state00)

    //Circulation
    let circPath:string = "models/circ/circulation_02.glb"
    let circ = new Entity()
        circ.addComponent(new GLTFShape(circPath))
        circ.addComponent(new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
        }))

    //Wayfinder
    let wfPath:string = "models/wayfinding/wayfinding02.glb"
    let wf = new Entity()
        wf.addComponent(new GLTFShape(wfPath))
        wf.addComponent(new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
        }))

    //Door
    let doorPath:string = "models/circ/doors_05.glb"
    let door = new Entity()
        door.addComponent(new GLTFShape(doorPath))
        door.addComponent(new Transform({
            position: new Vector3(80, 1.5, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
        }))

    //Respawner 1
    let respawner01 = new Entity()
    let triggerBox07 = new utils.TriggerBoxShape()
        respawner01.addComponent(new BoxShape())
        respawner01.getComponent(BoxShape).withCollisions = false
        respawner01.getComponent(BoxShape).visible = false
        respawner01.addComponent(new Transform({
          position: new Vector3(88, 2.5, 47),
          scale: new Vector3(4, 4, .5)
        }))
        respawner01.addComponent(
          new utils.TriggerComponent(triggerBox07, {
            onCameraEnter: () => {
              movePlayerTo({ x: 88, y: 0, z: 3 })
          }}))

    //Respawner 2
    let respawner02 = new Entity()
    let triggerBox08 = new utils.TriggerBoxShape()
        respawner02.addComponent(new BoxShape())
        respawner02.getComponent(BoxShape).withCollisions = false
        respawner02.getComponent(BoxShape).visible = false
        respawner02.addComponent(new Transform({
          position: new Vector3(88, 2.5, 1),
          scale: new Vector3(4, 4, .5)
        }))
        respawner02.addComponent(
          new utils.TriggerComponent(triggerBox08, {
            onCameraEnter: () => {
              movePlayerTo({ x: 88, y: 0, z: 45 })
          }}))

//Set parent
circ.setParent(state00)
door.setParent(state00)
respawner01.setParent(state00)
respawner02.setParent(state00)
wf.setParent(state00)














//State 01 - Parent
let state01 = new Entity()
state01.addComponent(
  new Transform({
    position: new Vector3(0, 1.5, 0)
}))
engine.addEntity(state01)
state01.addComponent(
    new utils.ToggleComponent(utils.ToggleState.On, value => {
        engine.removeEntity(state02),
        engine.removeEntity(state02_1),
        engine.removeEntity(state02_2),
        engine.removeEntity(state02_2_1),
        engine.removeEntity(state02_2_2),
        engine.removeEntity(state02_2_3),
        engine.removeEntity(state02_3),
        engine.removeEntity(state03),
        engine.removeEntity(state03_1),
        engine.removeEntity(state03_2),
        engine.removeEntity(state03_3),
        engine.addEntity(state01)
  })
)



    //tag 01
    let tag01 = new Entity()
    let tag01Path:string = "models/tags/tags_1-3_02.glb"
        tag01.addComponent(new GLTFShape(tag01Path))
        tag01.addComponent(new Transform({
            position: new Vector3(80, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
    }))

    //wayfind board 01_1
    const wayfind_01_1 = new Entity()
    wayfind_01_1.addComponent(new PlaneShape())
    wayfind_01_1.addComponent(wayfind01)
    wayfind_01_1.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 8),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //wayfind board 01_2
    const wayfind_01_2 = new Entity()
    wayfind_01_2.addComponent(new PlaneShape())
    wayfind_01_2.addComponent(wayfind02)
    wayfind_01_2.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 24),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //wayfind board 01_3
    const wayfind_01_3 = new Entity()
    wayfind_01_3.addComponent(new PlaneShape())
    wayfind_01_3.addComponent(wayfind03)
    wayfind_01_3.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 40),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //State Trigger 01 to 02
    const st102 = new Entity()
    st102.addComponent(new BoxShape())
    st102.getComponent(BoxShape).withCollisions = false
    st102.getComponent(BoxShape).visible = false
    st102.addComponent(material004)
    st102.addComponent(new Transform({
      position: new Vector3(88, 1, 47),
      scale: new Vector3(4, 4, .5)
    }))
    let triggerBox01 = new utils.TriggerBoxShape()
    st102.addComponent(
      new utils.TriggerComponent(
        triggerBox01,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02.getComponent(utils.ToggleComponent).toggle()}
    }))

    //State Trigger 01 to 03
    const st103 = new Entity()
    st103.addComponent(new BoxShape())
    st103.getComponent(BoxShape).withCollisions = false
    st103.getComponent(BoxShape).visible = false
    st103.addComponent(material005)
    st103.addComponent(new Transform({
      position: new Vector3(88, 1, 1),
      scale: new Vector3(4, 4, .5)
    }))
    let triggerBox02 = new utils.TriggerBoxShape()
    st103.addComponent(
      new utils.TriggerComponent(
        triggerBox02,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 01 to 01_1
    const box01 = new Entity()
    let triggerBox09 = new utils.TriggerBoxShape()

    box01.addComponent(new BoxShape())
    box01.getComponent(BoxShape).withCollisions = false
    box01.getComponent(BoxShape).visible = false
    box01.addComponent(material01)
    box01.addComponent(new Transform({
      position: new Vector3(88, 1, 15),
      scale: new Vector3(4, 4, 1)
      }))
    box01.addComponent(
      new utils.TriggerComponent(
        triggerBox09,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01_1.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 01 to 01_1
    const box01_1 = new Entity()
    let triggerBox09_1 = new utils.TriggerBoxShape()

    box01_1.addComponent(new BoxShape())
    box01_1.getComponent(BoxShape).withCollisions = false
    box01_1.getComponent(BoxShape).visible = false
    box01_1.addComponent(material01)
    box01_1.addComponent(new Transform({
      position: new Vector3(88, 1, 2.5),
      scale: new Vector3(4, 4, 1)
      }))
    box01_1.addComponent(
      new utils.TriggerComponent(
        triggerBox09_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01_1.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 01 to 01_2
    const box02 = new Entity()
    let triggerBox10 = new utils.TriggerBoxShape()

    box02.addComponent(new BoxShape())
    box02.getComponent(BoxShape).withCollisions = false
    box02.getComponent(BoxShape).visible = false
    box02.addComponent(material02)
    box02.addComponent(new Transform({
      position: new Vector3(88, 1, 17),
      scale: new Vector3(4, 4, 1)
      }))
    box02.addComponent(
      new utils.TriggerComponent(
        triggerBox10,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01_2.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 01 to 01_2_1
    const box02_1 = new Entity()
    let triggerBox10_1 = new utils.TriggerBoxShape()

    box02_1.addComponent(new BoxShape())
    box02_1.getComponent(BoxShape).withCollisions = false
    box02_1.getComponent(BoxShape).visible = false
    box02_1.addComponent(material02)
    box02_1.addComponent(new Transform({
      position: new Vector3(88, 1, 31),
      scale: new Vector3(4, 4, 1)
      }))
    box02_1.addComponent(
      new utils.TriggerComponent(
        triggerBox10_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01_2.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 01 to 01_3
    const box03 = new Entity()
    let triggerBox11 = new utils.TriggerBoxShape()

    box03.addComponent(new BoxShape())
    box03.getComponent(BoxShape).withCollisions = false
    box03.getComponent(BoxShape).visible = false
    box03.addComponent(new Transform({
      position: new Vector3(88, 1, 33),
      scale: new Vector3(4, 4, 1)
      }))
    box03.addComponent(
      new utils.TriggerComponent(
        triggerBox11,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01_3.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 01 to 01_3_1
    const box03_1 = new Entity()
    let triggerBox11_1 = new utils.TriggerBoxShape()

    box03_1.addComponent(new BoxShape())
    box03_1.getComponent(BoxShape).withCollisions = false
    box03_1.getComponent(BoxShape).visible = false
    box03_1.addComponent(new Transform({
      position: new Vector3(88, 1, 45.5),
      scale: new Vector3(4, 4, 1)
      }))
    box03_1.addComponent(
      new utils.TriggerComponent(
        triggerBox11_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01_3.getComponent(utils.ToggleComponent).toggle()}
    }))



//Set parent
tag01.setParent(state01)
st102.setParent(state01)
st103.setParent(state01)
box01.setParent(state01)
box01_1.setParent(state01)
box02.setParent(state01)
box02_1.setParent(state01)
box03.setParent(state01)
box03_1.setParent(state01)
wayfind_01_1.setParent(state01)
wayfind_01_2.setParent(state01)
wayfind_01_3.setParent(state01)







//State 02 - Parent
let state02 = new Entity()
state02.addComponent(
  new Transform({
    position: new Vector3(0, 1.5, 0)
}))
state02.addComponent(
    new utils.ToggleComponent(utils.ToggleState.Off, value => {{
        engine.removeEntity(state01),
        engine.removeEntity(state01_1),
            engine.removeEntity(state01_1_1),
            engine.removeEntity(state01_1_2),
            engine.removeEntity(state01_1_3),
            engine.removeEntity(state01_1_4),
            engine.removeEntity(state01_1_5),
            engine.removeEntity(state01_1_6),
            engine.removeEntity(state01_1_7),
            engine.removeEntity(state01_1_8),
            engine.removeEntity(state01_1_9),
            engine.removeEntity(state01_1_10),
            engine.removeEntity(state01_1_11),
            engine.removeEntity(state01_1_12),
            engine.removeEntity(state01_1_13),
            engine.removeEntity(state01_1_14),
            engine.removeEntity(state01_1_15),
        engine.removeEntity(state01_2),
        engine.removeEntity(state01_3),
        engine.removeEntity(state03),
        engine.removeEntity(state03_1),
        engine.removeEntity(state03_2),
        engine.removeEntity(state03_3),
        engine.addEntity(state02)
      }
  })
)

    //tag 02
    let tag02 = new Entity()
    let tag02Path:string = "models/tags/tags_4-6_02.glb"
        tag02.addComponent(new GLTFShape(tag02Path))
        tag02.addComponent(new Transform({
            position: new Vector3(80, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
    }))

    //wayfind board 02_1
    const wayfind_02_1 = new Entity()
    wayfind_02_1.addComponent(new PlaneShape())
    wayfind_02_1.addComponent(wayfind04)
    wayfind_02_1.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 8),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //wayfind board 02_2
    const wayfind_02_2 = new Entity()
    wayfind_02_2.addComponent(new PlaneShape())
    wayfind_02_2.addComponent(wayfind05)
    wayfind_02_2.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 24),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //wayfind board 02_3
    const wayfind_02_3 = new Entity()
    wayfind_02_3.addComponent(new PlaneShape())
    wayfind_02_3.addComponent(wayfind06)
    wayfind_02_3.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 40),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //State Trigger 02 to 01
    const st201 = new Entity()
    st201.addComponent(new BoxShape())
    st201.getComponent(BoxShape).withCollisions = false
    st201.getComponent(BoxShape).visible = false
    st201.addComponent(material006)
    st201.addComponent(new Transform({
      position: new Vector3(88, 1, 1),
      scale: new Vector3(4, 4, .5)
    }))
    let triggerBox03 = new utils.TriggerBoxShape()
    st201.addComponent(
      new utils.TriggerComponent(
        triggerBox03,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01.getComponent(utils.ToggleComponent).toggle()}
      }
    ))

    //State Trigger 02 to 03
    const st203 = new Entity()
    st203.addComponent(new BoxShape())
    st203.getComponent(BoxShape).withCollisions = false
    st203.getComponent(BoxShape).visible = false
    st203.addComponent(material005)
    st203.addComponent(new Transform({
      position: new Vector3(88, 1, 47),
      scale: new Vector3(4, 4, .5)
    }))
    let triggerBox04 = new utils.TriggerBoxShape()
    st203.addComponent(
      new utils.TriggerComponent(
        triggerBox04,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03.getComponent(utils.ToggleComponent).toggle()}
      }
    ))

    //Trigger 02 to 02_1
    const box04 = new Entity()
    let triggerBox12 = new utils.TriggerBoxShape()

    box04.addComponent(new BoxShape())
    box04.getComponent(BoxShape).withCollisions = false
    box04.getComponent(BoxShape).visible = false
    box04.addComponent(material01)
    box04.addComponent(new Transform({
      position: new Vector3(88, 1, 15),
      scale: new Vector3(4, 4, 1)
      }))
    box04.addComponent(
      new utils.TriggerComponent(
        triggerBox12,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02_1.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 02 to 02_1
    const box04_1 = new Entity()
    let triggerBox12_1 = new utils.TriggerBoxShape()

    box04_1.addComponent(new BoxShape())
    box04_1.getComponent(BoxShape).withCollisions = false
    box04_1.getComponent(BoxShape).visible = false
    box04_1.addComponent(material01)
    box04_1.addComponent(new Transform({
      position: new Vector3(88, 1, 2.5),
      scale: new Vector3(4, 4, 1)
      }))
    box04_1.addComponent(
      new utils.TriggerComponent(
        triggerBox12_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02_1.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 02 to 02_2
    const box05 = new Entity()
    let triggerBox13 = new utils.TriggerBoxShape()

    box05.addComponent(new BoxShape())
    box05.getComponent(BoxShape).withCollisions = false
    box05.getComponent(BoxShape).visible = false
    box05.addComponent(material02)
    box05.addComponent(new Transform({
      position: new Vector3(88, 1, 17),
      scale: new Vector3(4, 4, 1)
      }))
    box05.addComponent(
      new utils.TriggerComponent(
        triggerBox13,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02_2.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 02 to 02_2
    const box05_1 = new Entity()
    let triggerBox13_1 = new utils.TriggerBoxShape()

    box05_1.addComponent(new BoxShape())
    box05_1.getComponent(BoxShape).withCollisions = false
    box05_1.getComponent(BoxShape).visible = false
    box05_1.addComponent(material02)
    box05_1.addComponent(new Transform({
      position: new Vector3(88, 1, 31),
      scale: new Vector3(4, 4, 1)
      }))
    box05_1.addComponent(
      new utils.TriggerComponent(
        triggerBox13_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02_2.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 02 to 02_3
    const box06 = new Entity()
    let triggerBox14 = new utils.TriggerBoxShape()

    box06.addComponent(new BoxShape())
    box06.getComponent(BoxShape).withCollisions = false
    box06.getComponent(BoxShape).visible = false
    box06.addComponent(material03)
    box06.addComponent(new Transform({
      position: new Vector3(88, 1, 33),
      scale: new Vector3(4, 4, 1)
      }))
    box06.addComponent(
      new utils.TriggerComponent(
        triggerBox14,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02_3.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 02 to 02_3
    const box06_1 = new Entity()
    let triggerBox14_1 = new utils.TriggerBoxShape()

    box06_1.addComponent(new BoxShape())
    box06_1.getComponent(BoxShape).withCollisions = false
    box06_1.getComponent(BoxShape).visible = false
    box06_1.addComponent(material03)
    box06_1.addComponent(new Transform({
      position: new Vector3(88, 1, 45.5),
      scale: new Vector3(4, 4, 1)
      }))
    box06_1.addComponent(
      new utils.TriggerComponent(
        triggerBox14_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02_3.getComponent(utils.ToggleComponent).toggle()}
    }))


//Set parent
tag02.setParent(state02)
st201.setParent(state02)
st203.setParent(state02)
box04.setParent(state02)
box04_1.setParent(state02)
box05.setParent(state02)
box05_1.setParent(state02)
box06.setParent(state02)
box06_1.setParent(state02)
wayfind_02_1.setParent(state02)
wayfind_02_2.setParent(state02)
wayfind_02_3.setParent(state02)







//State 03 - Parent
let state03 = new Entity()
state03.addComponent(
  new Transform({
    position: new Vector3(0, 1.5, 0)
}))
state03.addComponent(
    new utils.ToggleComponent(utils.ToggleState.Off, value => {
        engine.removeEntity(state01),
        engine.removeEntity(state01_1),
            engine.removeEntity(state01_1_1),
            engine.removeEntity(state01_1_2),
            engine.removeEntity(state01_1_3),
            engine.removeEntity(state01_1_1),
            engine.removeEntity(state01_1_2),
            engine.removeEntity(state01_1_3),
            engine.removeEntity(state01_1_4),
            engine.removeEntity(state01_1_5),
            engine.removeEntity(state01_1_6),
            engine.removeEntity(state01_1_7),
            engine.removeEntity(state01_1_8),
            engine.removeEntity(state01_1_9),
            engine.removeEntity(state01_1_10),
            engine.removeEntity(state01_1_11),
            engine.removeEntity(state01_1_12),
            engine.removeEntity(state01_1_13),
            engine.removeEntity(state01_1_14),
            engine.removeEntity(state01_1_15),
        engine.removeEntity(state01_2),
        engine.removeEntity(state01_3),
        engine.removeEntity(state02),
        engine.removeEntity(state02_1),
        engine.removeEntity(state02_2),
            engine.removeEntity(state02_2_1),
            engine.removeEntity(state02_2_2),
            engine.removeEntity(state02_2_3),
        engine.removeEntity(state02_3),
        engine.addEntity(state03)
  })
)

    //tag 03
    let tag03 = new Entity()
    let tag03Path:string = "models/tags/tags_7-9_02.glb"
        tag03.addComponent(new GLTFShape(tag03Path))
        tag03.addComponent(new Transform({
            position: new Vector3(80, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
    }))

    //wayfind board 03_1
    const wayfind_03_1 = new Entity()
    wayfind_03_1.addComponent(new PlaneShape())
    wayfind_03_1.addComponent(wayfind07)
    wayfind_03_1.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 8),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //wayfind board 03_2
    const wayfind_03_2 = new Entity()
    wayfind_03_2.addComponent(new PlaneShape())
    wayfind_03_2.addComponent(wayfind08)
    wayfind_03_2.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 24),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //wayfind board 02_3
    const wayfind_03_3 = new Entity()
    wayfind_03_3.addComponent(new PlaneShape())
    wayfind_03_3.addComponent(wayfind09)
    wayfind_03_3.addComponent(
      new Transform({
        position: new Vector3(92.75, 3, 40),
        scale: new Vector3(10, 10, 1),
        rotation: Quaternion.Euler(180, 270, 0)
    }))

    //State Trigger 03 to 02
    const st302 = new Entity()
    st302.addComponent(new BoxShape())
    st302.getComponent(BoxShape).withCollisions = false
    st302.getComponent(BoxShape).visible = false
    st302.addComponent(material004)
    st302.addComponent(new Transform({
      position: new Vector3(88, 1, 1),
      scale: new Vector3(4, 4, .5)
    }))
    let triggerBox05 = new utils.TriggerBoxShape()
    st302.addComponent(
      new utils.TriggerComponent(
        triggerBox05,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02.getComponent(utils.ToggleComponent).toggle()}
      }
    ))

    //State Trigger 03 to 01
    const st301 = new Entity()
    st301.addComponent(new BoxShape())
    st301.getComponent(BoxShape).withCollisions = false
    st301.getComponent(BoxShape).visible = false
    st301.addComponent(material006)
    st301.addComponent(new Transform({
      position: new Vector3(88, 1, 47),
      scale: new Vector3(4, 4, .5)
    }))
    let triggerBox06 = new utils.TriggerBoxShape()
    st301.addComponent(
      new utils.TriggerComponent(
        triggerBox06,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01.getComponent(utils.ToggleComponent).toggle()}
      }
    ))

    //Trigger 03 to 03_1
    const box07 = new Entity()
    let triggerBox15 = new utils.TriggerBoxShape()

    box07.addComponent(new BoxShape())
    box07.getComponent(BoxShape).withCollisions = false
    box07.getComponent(BoxShape).visible = false
    box07.addComponent(material01)
    box07.addComponent(new Transform({
      position: new Vector3(88, 1, 15),
      scale: new Vector3(4, 4, 1)
      }))
    box07.addComponent(
      new utils.TriggerComponent(
        triggerBox15,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03_1.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 03 to 03_1
    const box07_1 = new Entity()
    let triggerBox15_1 = new utils.TriggerBoxShape()

    box07_1.addComponent(new BoxShape())
    box07_1.getComponent(BoxShape).withCollisions = false
    box07_1.getComponent(BoxShape).visible = false
    box07_1.addComponent(material01)
    box07_1.addComponent(new Transform({
      position: new Vector3(88, 1, 2.5),
      scale: new Vector3(4, 4, 1)
      }))
    box07_1.addComponent(
      new utils.TriggerComponent(
        triggerBox15_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03_1.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 03 to 03_2
    const box08 = new Entity()
    let triggerBox16 = new utils.TriggerBoxShape()

    box08.addComponent(new BoxShape())
    box08.getComponent(BoxShape).withCollisions = false
    box08.getComponent(BoxShape).visible = false
    box08.addComponent(material02)
    box08.addComponent(new Transform({
      position: new Vector3(88, 1, 17),
      scale: new Vector3(4, 4, 1)
      }))
    box08.addComponent(
      new utils.TriggerComponent(
        triggerBox16,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03_2.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 03 to 03_2
    const box08_1 = new Entity()
    let triggerBox16_1 = new utils.TriggerBoxShape()

    box08_1.addComponent(new BoxShape())
    box08_1.getComponent(BoxShape).withCollisions = false
    box08_1.getComponent(BoxShape).visible = false
    box08_1.addComponent(material02)
    box08_1.addComponent(new Transform({
      position: new Vector3(88, 1, 31),
      scale: new Vector3(4, 4, 1)
      }))
    box08_1.addComponent(
      new utils.TriggerComponent(
        triggerBox16_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03_2.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 03 to 03_3
    const box09 = new Entity()
    let triggerBox17 = new utils.TriggerBoxShape()

    box09.addComponent(new BoxShape())
    box09.getComponent(BoxShape).withCollisions = false
    box09.getComponent(BoxShape).visible = false
    box09.addComponent(material03)
    box09.addComponent(new Transform({
      position: new Vector3(88, 1, 33),
      scale: new Vector3(4, 4, 1)
      }))
    box09.addComponent(
      new utils.TriggerComponent(
        triggerBox17,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03_3.getComponent(utils.ToggleComponent).toggle()}
    }))

    //Trigger 03 to 03_3
    const box09_1 = new Entity()
    let triggerBox17_1 = new utils.TriggerBoxShape()

    box09_1.addComponent(new BoxShape())
    box09_1.getComponent(BoxShape).withCollisions = false
    box09_1.getComponent(BoxShape).visible = false
    box09_1.addComponent(material03)
    box09_1.addComponent(new Transform({
      position: new Vector3(88, 1, 45.5),
      scale: new Vector3(4, 4, 1)
      }))
    box09_1.addComponent(
      new utils.TriggerComponent(
        triggerBox17_1,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03_3.getComponent(utils.ToggleComponent).toggle()}
    }))

//Set parent
tag03.setParent(state03)
st302.setParent(state03)
st301.setParent(state03)
box07.setParent(state03)
box07_1.setParent(state03)
box08.setParent(state03)
box08_1.setParent(state03)
box09.setParent(state03)
box09_1.setParent(state03)
wayfind_03_1.setParent(state03)
wayfind_03_2.setParent(state03)
wayfind_03_3.setParent(state03)






























//State 01_1
  let state01_1 = new Entity()
  state01_1.addComponent(
    new Transform({
      position: new Vector3(0, 0.5, 0)
  }))
  state01_1.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
          engine.addEntity(state01_1),
          engine.removeEntity(state01_2),
          engine.removeEntity(state01_3)
    })
  )

                //doormask _XX
                let doormask1_XXPath:string = "models/doormasks/_XX.glb"
                let doormask1_XX = new Entity()
                    doormask1_XX.addComponent(new GLTFShape(doormask1_XXPath))
                    doormask1_XX.addComponent(new Transform({
                        position: new Vector3(0, -.5, 0),
                        scale: new Vector3(1, 1, 1),
                        rotation: Quaternion.Euler(0, 180, 0)
                    }))

                //Table
                const table01 = new Entity()
                let table01Path:string = "models/table/table_01.glb"
                table01.addComponent(new GLTFShape(table01Path))
                table01.addComponent(new Transform({
                  position: new Vector3(4, 0, 24),
                  scale: new Vector3(1, 1, 1)
                }))

                //Table 02
                const table02 = new Entity()
                let table02Path:string = "models/table/table_01.glb"
                table02.addComponent(new GLTFShape(table02Path))
                table02.addComponent(new Transform({
                  position: new Vector3(24, 0, 4),
                  scale: new Vector3(1, 1, 1),
                  rotation: Quaternion.Euler(0, 90, 0)
                }))

                //Table 03
                const table03 = new Entity()
                let table03Path:string = "models/table/table_01.glb"
                table03.addComponent(new GLTFShape(table03Path))
                table03.addComponent(new Transform({
                  position: new Vector3(56, 0, 4),
                  scale: new Vector3(1, 1, 1),
                  rotation: Quaternion.Euler(0, 90, 0)
                }))

                //Table 04
                const table04 = new Entity()
                let table04Path:string = "models/table/table_01.glb"
                table04.addComponent(new GLTFShape(table04Path))
                table04.addComponent(new Transform({
                  position: new Vector3(24, 0, 44),
                  scale: new Vector3(1, 1, 1),
                  rotation: Quaternion.Euler(0, 90, 0)
                }))

                //Table 05
                const table05 = new Entity()
                let table05Path:string = "models/table/table_01.glb"
                table05.addComponent(new GLTFShape(table05Path))
                table05.addComponent(new Transform({
                  position: new Vector3(56, 0, 44),
                  scale: new Vector3(1, 1, 1),
                  rotation: Quaternion.Euler(0, 90, 0)
                }))

                //Trigger portfolio 01
                const boxpt01 = new Entity()
                let boxpt01Path:string = "models/content/maze_05_single.glb"
                boxpt01.addComponent(new GLTFShape(boxpt01Path))
                boxpt01.addComponent(new Transform({
                  position: new Vector3(4, 1, 32),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 270, 0)
                  }))
                boxpt01.addComponent(
                    new OnClick(event => {
                      state01_1_1.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 02
                const boxpt02 = new Entity()
                let boxpt02Path:string = "models/content/red_1x1_pool.glb"
                boxpt02.addComponent(new GLTFShape(boxpt02Path))
                boxpt02.addComponent(new Transform({
                  position: new Vector3(4, 1, 16),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt02.addComponent(
                    new OnClick(event => {
                      state01_1_2.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 03
                const boxpt03 = new Entity()
                let boxpt03Path:string = "models/content/mastabla_01.glb"
                boxpt03.addComponent(new GLTFShape(boxpt03Path))
                boxpt03.addComponent(new Transform({
                  position: new Vector3(4, 1, 24),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 90, 0)
                  }))
                boxpt03.addComponent(
                    new OnClick(event => {
                      state01_1_3.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 04
                const boxpt04 = new Entity()
                let boxpt04Path:string = "models/content/folly_01.glb"
                boxpt04.addComponent(new GLTFShape(boxpt04Path))
                boxpt04.addComponent(new Transform({
                  position: new Vector3(16, 1, 4),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt04.addComponent(
                    new OnClick(event => {
                      state01_1_4.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 05
                const boxpt05 = new Entity()
                let boxpt05Path:string = "models/content/folly_02.glb"
                boxpt05.addComponent(new GLTFShape(boxpt05Path))
                boxpt05.addComponent(new Transform({
                  position: new Vector3(24, 1, 4),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt05.addComponent(
                    new OnClick(event => {
                      state01_1_5.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 06
                const boxpt06 = new Entity()
                let boxpt06Path:string = "models/content/folly_03.glb"
                boxpt06.addComponent(new GLTFShape(boxpt06Path))
                boxpt06.addComponent(new Transform({
                  position: new Vector3(32, 1, 4),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt06.addComponent(
                    new OnClick(event => {
                      state01_1_6.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 07
                const boxpt07 = new Entity()
                let boxpt07Path:string = "models/content/cell_01.glb"
                boxpt07.addComponent(new GLTFShape(boxpt07Path))
                boxpt07.addComponent(new Transform({
                  position: new Vector3(48, 1, 4),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt07.addComponent(
                    new OnClick(event => {
                      state01_1_7.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 08
                const boxpt08 = new Entity()
                let boxpt08Path:string = "models/content/varc_zoser.glb"
                boxpt08.addComponent(new GLTFShape(boxpt08Path))
                boxpt08.addComponent(new Transform({
                  position: new Vector3(56, 1, 4),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 90, 0)
                  }))
                boxpt08.addComponent(
                    new OnClick(event => {
                      state01_1_8.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 09
                const boxpt09 = new Entity()
                let boxpt09Path:string = "models/content/domino_01.glb"
                boxpt09.addComponent(new GLTFShape(boxpt09Path))
                boxpt09.addComponent(new Transform({
                  position: new Vector3(64, 1, 4),
                  scale: new Vector3(.1, .1, .1),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt09.addComponent(
                    new OnClick(event => {
                      state01_1_9.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 10
                const boxpt10 = new Entity()
                let boxpt10Path:string = "models/content/mtower_01.glb"
                boxpt10.addComponent(new GLTFShape(boxpt10Path))
                boxpt10.addComponent(new Transform({
                  position: new Vector3(16, 1, 44),
                  scale: new Vector3(.025, .025, .025),
                  rotation: Quaternion.Euler(0, 90, 0)
                  }))
                boxpt10.addComponent(
                    new OnClick(event => {
                      state01_1_10.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 11
                const boxpt11 = new Entity()
                let boxpt11Path:string = "models/content/captower.glb"
                boxpt11.addComponent(new GLTFShape(boxpt11Path))
                boxpt11.addComponent(new Transform({
                  position: new Vector3(24, 3.02, 44),
                  scale: new Vector3(.025, .025, .025),
                  rotation: Quaternion.Euler(180, 0, 0)
                  }))
                boxpt11.addComponent(
                    new OnClick(event => {
                      state01_1_11.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 12
                const boxpt12 = new Entity()
                let boxpt12Path:string = "models/content/cv_01.glb"
                boxpt12.addComponent(new GLTFShape(boxpt12Path))
                boxpt12.addComponent(new Transform({
                  position: new Vector3(32, 1, 44),
                  scale: new Vector3(.05, .05, .05),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt12.addComponent(
                    new OnClick(event => {
                      state01_1_12.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 13
                const boxpt13 = new Entity()
                boxpt13.addComponent(new BoxShape())
                boxpt13.addComponent(material002)
                boxpt13.addComponent(new Transform({
                  position: new Vector3(48, 1.5, 44),
                  scale: new Vector3(.5, .5, .5),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt13.addComponent(
                    new OnClick(event => {
                      state01_1_13.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 14
                const boxpt14 = new Entity()
                boxpt14.addComponent(new BoxShape())
                boxpt14.addComponent(material002)
                boxpt14.addComponent(new Transform({
                  position: new Vector3(56, 1.5, 44),
                  scale: new Vector3(.5, .5, .5),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt14.addComponent(
                    new OnClick(event => {
                      state01_1_14.getComponent(utils.ToggleComponent).toggle()
                    })
                )

                //Trigger portfolio 15
                const boxpt15 = new Entity()
                boxpt15.addComponent(new BoxShape())
                boxpt15.addComponent(material002)
                boxpt15.addComponent(new Transform({
                  position: new Vector3(64, 1.5, 44),
                  scale: new Vector3(.5, .5, .5),
                  rotation: Quaternion.Euler(0, 0, 0)
                  }))
                boxpt15.addComponent(
                    new OnClick(event => {
                      state01_1_15.getComponent(utils.ToggleComponent).toggle()
                    })
                )



                //State 01_3_1
                let state01_1_1 = new Entity()
                state01_1_1.addComponent(
                    new utils.ToggleComponent(utils.ToggleState.Off, value => {
                      engine.addEntity(state01_1_1)
                      engine.removeEntity(state01_1_2)
                      engine.removeEntity(state01_1_3)
                      engine.removeEntity(state01_1_4)
                      engine.removeEntity(state01_1_5)
                      engine.removeEntity(state01_1_6)
                      engine.removeEntity(state01_1_7)
                      engine.removeEntity(state01_1_8)
                      engine.removeEntity(state01_1_9)
                      engine.removeEntity(state01_1_10)
                      engine.removeEntity(state01_1_11)
                      engine.removeEntity(state01_1_12)
                      engine.removeEntity(state01_1_13)
                      engine.removeEntity(state01_1_14)
                      engine.removeEntity(state01_1_15)
                  })
                )
                            //maze
                            let maze = new Entity()
                            let mazePath:string = "models/content/maze_05_single.glb"
                                maze.addComponent(new GLTFShape(mazePath))
                                maze.addComponent(new Transform({
                                    position: new Vector3(40, .5, 24),
                                    scale: new Vector3(1, 1, 1),
                                    rotation: Quaternion.Euler(0, 270, 0)
                            }))

                maze.setParent(state01_1_1)

                //State 01_1_2
                let state01_1_2 = new Entity()
                state01_1_2.addComponent(
                    new utils.ToggleComponent(utils.ToggleState.Off, value => {
                      engine.addEntity(state01_1_2)
                      engine.removeEntity(state01_1_1)
                      engine.removeEntity(state01_1_3)
                      engine.removeEntity(state01_1_4)
                      engine.removeEntity(state01_1_5)
                      engine.removeEntity(state01_1_6)
                      engine.removeEntity(state01_1_7)
                      engine.removeEntity(state01_1_8)
                      engine.removeEntity(state01_1_9)
                      engine.removeEntity(state01_1_10)
                      engine.removeEntity(state01_1_11)
                      engine.removeEntity(state01_1_12)
                      engine.removeEntity(state01_1_13)
                      engine.removeEntity(state01_1_14)
                      engine.removeEntity(state01_1_15)
                  })
                )

                          //tower
                          let tower = new Entity()
                          let towerPath:string = "models/content/red_1x1_pool.glb"
                              tower.addComponent(new GLTFShape(towerPath))
                              tower.addComponent(new Transform({
                                  position: new Vector3(40, .5, 24),
                                  scale: new Vector3(1, 1, 1),
                                  rotation: Quaternion.Euler(0, 180, 0)
                          }))

              tower.setParent(state01_1_2)

              //State 01_1_3
              let state01_1_3 = new Entity()
              state01_1_3.addComponent(
                  new utils.ToggleComponent(utils.ToggleState.Off, value => {
                    engine.addEntity(state01_1_3)
                    engine.removeEntity(state01_1_1)
                    engine.removeEntity(state01_1_2)
                    engine.removeEntity(state01_1_4)
                    engine.removeEntity(state01_1_5)
                    engine.removeEntity(state01_1_6)
                    engine.removeEntity(state01_1_7)
                    engine.removeEntity(state01_1_8)
                    engine.removeEntity(state01_1_9)
                    engine.removeEntity(state01_1_10)
                    engine.removeEntity(state01_1_11)
                    engine.removeEntity(state01_1_12)
                    engine.removeEntity(state01_1_13)
                    engine.removeEntity(state01_1_14)
                    engine.removeEntity(state01_1_15)
                })
              )

                        //mastaba
                        let mastaba = new Entity()
                        let mastabaPath:string = "models/content/mastabla_01.glb"
                            mastaba.addComponent(new GLTFShape(mastabaPath))
                            mastaba.addComponent(new Transform({
                                position: new Vector3(40, .5, 24),
                                scale: new Vector3(1, 1, 1),
                                rotation: Quaternion.Euler(0, 90, 0)
                        }))

            mastaba.setParent(state01_1_3)

            //State 01_1_4
            let state01_1_4 = new Entity()
            state01_1_4.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_4)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                        //folly 01
                        let folly01 = new Entity()
                        let folly01Path:string = "models/content/folly_01.glb"
                            folly01.addComponent(new GLTFShape(folly01Path))
                            folly01.addComponent(new Transform({
                                position: new Vector3(40, .5, 24),
                                scale: new Vector3(1, 1, 1),
                                rotation: Quaternion.Euler(0, 90, 0)
                        }))

            folly01.setParent(state01_1_4)

            //State 01_1_5
            let state01_1_5 = new Entity()
            state01_1_5.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_5)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                      //folly 02
                      let folly02 = new Entity()
                      let folly02Path:string = "models/content/folly_02.glb"
                          folly02.addComponent(new GLTFShape(folly02Path))
                          folly02.addComponent(new Transform({
                              position: new Vector3(40, .5, 24),
                              scale: new Vector3(1, 1, 1),
                              rotation: Quaternion.Euler(0, 90, 0)
                      }))

            folly02.setParent(state01_1_5)

            //State 01_1_6
            let state01_1_6 = new Entity()
            state01_1_6.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_6)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                      //folly 03
                      let folly03 = new Entity()
                      let folly03Path:string = "models/content/folly_03.glb"
                          folly03.addComponent(new GLTFShape(folly03Path))
                          folly03.addComponent(new Transform({
                              position: new Vector3(40, .5, 24),
                              scale: new Vector3(1, 1, 1),
                              rotation: Quaternion.Euler(0, 90, 0)
                      }))

            folly03.setParent(state01_1_6)

            //State 01_1_7
            let state01_1_7 = new Entity()
            state01_1_7.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_7)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                      //cell tower
                      let cell_01 = new Entity()
                      let cell_01Path:string = "models/content/cell_01.glb"
                          cell_01.addComponent(new GLTFShape(cell_01Path))
                          cell_01.addComponent(new Transform({
                              position: new Vector3(40, .5, 24),
                              scale: new Vector3(2, 2, 2),
                              rotation: Quaternion.Euler(0, 90, 0)
                      }))

            cell_01.setParent(state01_1_7)

            //State 01_1_8
            let state01_1_8 = new Entity()
            state01_1_8.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_8)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                      //zoser
                      let zoser = new Entity()
                      let zoserPath:string = "models/content/varc_zoser.glb"
                          zoser.addComponent(new GLTFShape(zoserPath))
                          zoser.addComponent(new Transform({
                              position: new Vector3(40, .5, 24),
                              scale: new Vector3(1, 1, 1),
                              rotation: Quaternion.Euler(0, 90, 0)
                      }))

            zoser.setParent(state01_1_8)

            //State 01_1_9
            let state01_1_9 = new Entity()
            state01_1_9.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_9)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                      //domino
                      let domino = new Entity()
                      let dominoPath:string = "models/content/domino_01.glb"
                          domino.addComponent(new GLTFShape(dominoPath))
                          domino.addComponent(new Transform({
                              position: new Vector3(48, .5, 24),
                              scale: new Vector3(2, 2, 2),
                              rotation: Quaternion.Euler(0, 180, 0)
                      }))

            domino.setParent(state01_1_9)

            //State 01_1_10
            let state01_1_10 = new Entity()
            state01_1_10.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_10)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                      //mtower
                      let mtower = new Entity()
                      let mtowerPath:string = "models/content/mtower_01.glb"
                          mtower.addComponent(new GLTFShape(mtowerPath))
                          mtower.addComponent(new Transform({
                              position: new Vector3(40, .5, 24),
                              scale: new Vector3(.75, .85, .75),
                              rotation: Quaternion.Euler(0, 90, 0)
                      }))

                      //elevator
                      const elevator = new Entity()
                      elevator.addComponent(new BoxShape())
                      elevator.addComponent(new Transform({
                        position: new Vector3(52, 1.7, 24),
                        scale: new Vector3(6, .5, 6),
                        rotation: Quaternion.Euler(0, 0, 0)
                        }))


            mtower.setParent(state01_1_10)
            elevator.setParent(state01_1_10)

            //State 01_1_11
            let state01_1_11 = new Entity()
            state01_1_11.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_11)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                      //captower
                      let captower = new Entity()
                      let captowerPath:string = "models/content/captower.glb"
                          captower.addComponent(new GLTFShape(captowerPath))
                          captower.addComponent(new Transform({
                              position: new Vector3(42, 81.5, 24),
                              scale: new Vector3(1, 1, 1),
                              rotation: Quaternion.Euler(180, 180, 0)
                      }))

            captower.setParent(state01_1_11)

            //State 01_1_12
            let state01_1_12 = new Entity()
            state01_1_12.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_12)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

                      //crypto valley
                      let cv = new Entity()
                      let cvPath:string = "models/content/cv_01.glb"
                          cv.addComponent(new GLTFShape(cvPath))
                          cv.addComponent(new Transform({
                              position: new Vector3(40, .5, 24),
                              scale: new Vector3(1, 1.25, 1),
                              rotation: Quaternion.Euler(0, 90, 0)
                      }))

            cv.setParent(state01_1_12)

            //State 01_1_13
            let state01_1_13 = new Entity()
            state01_1_13.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_13)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_14)
                  engine.removeEntity(state01_1_15)
              })
            )

            //State 01_1_14
            let state01_1_14 = new Entity()
            state01_1_14.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_14)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_15)
              })
            )

            //State 01_1_15
            let state01_1_15 = new Entity()
            state01_1_15.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state01_1_15)
                  engine.removeEntity(state01_1_1)
                  engine.removeEntity(state01_1_2)
                  engine.removeEntity(state01_1_3)
                  engine.removeEntity(state01_1_4)
                  engine.removeEntity(state01_1_5)
                  engine.removeEntity(state01_1_6)
                  engine.removeEntity(state01_1_7)
                  engine.removeEntity(state01_1_8)
                  engine.removeEntity(state01_1_9)
                  engine.removeEntity(state01_1_10)
                  engine.removeEntity(state01_1_11)
                  engine.removeEntity(state01_1_12)
                  engine.removeEntity(state01_1_13)
                  engine.removeEntity(state01_1_14)
              })
            )



  //set parent
  boxpt01.setParent(state01_1)
  boxpt02.setParent(state01_1)
  boxpt03.setParent(state01_1)
  boxpt04.setParent(state01_1)
  boxpt05.setParent(state01_1)
  boxpt06.setParent(state01_1)
  boxpt07.setParent(state01_1)
  boxpt08.setParent(state01_1)
  boxpt09.setParent(state01_1)
  boxpt10.setParent(state01_1)
  boxpt11.setParent(state01_1)
  boxpt12.setParent(state01_1)
  boxpt13.setParent(state01_1)
  boxpt14.setParent(state01_1)
  boxpt15.setParent(state01_1)

  table01.setParent(state01_1)
  table02.setParent(state01_1)
  table03.setParent(state01_1)
  table04.setParent(state01_1)
  table05.setParent(state01_1)
  doormask1_XX.setParent(state01_1)


//ADD START STATES
engine.addEntity(state01_1)
engine.addEntity(state01_1_3)

  //State 01_2
  let state01_2 = new Entity()
  state01_2.addComponent(
    new Transform({
      position: new Vector3(0, 0.5, 0)
  }))
  state01_2.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
          engine.addEntity(state01_2),
          engine.removeEntity(state01_1),
          engine.removeEntity(state01_1_1),
          engine.removeEntity(state01_1_2),
          engine.removeEntity(state01_1_3),
          engine.removeEntity(state01_1_4),
          engine.removeEntity(state01_1_5),
          engine.removeEntity(state01_1_6),
          engine.removeEntity(state01_1_7),
          engine.removeEntity(state01_1_8),
          engine.removeEntity(state01_1_9),
          engine.removeEntity(state01_1_10),
          engine.removeEntity(state01_1_11),
          engine.removeEntity(state01_1_12),
          engine.removeEntity(state01_1_13),
          engine.removeEntity(state01_1_14),
          engine.removeEntity(state01_1_15),
          engine.removeEntity(state01_3)
    })
  )

              //doormask 1 X_X
              let doormask1X_XPath:string = "models/doormasks/X_X.glb"
              let doormask1X_X = new Entity()
                  doormask1X_X.addComponent(new GLTFShape(doormask1X_XPath))
                  doormask1X_X.addComponent(new Transform({
                      position: new Vector3(0, -.5, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
                  }))

              //greenhouse bottom
              let greenhouse01 = new Entity()
              let greenhouse01Path:string = "models/gh/gh06.glb"
                  greenhouse01.addComponent(new GLTFShape(greenhouse01Path))
                  greenhouse01.addComponent(new Transform({
                      position: new Vector3(0, -.5, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
              }))

              //link 01 - conceptboard
              const link01 = new Entity()
              link01.addComponent(new BoxShape())
              const transform01 = new Transform({
                position: new Vector3(24, 1, 24) })
              link01.addComponent(transform01)
                link01.addComponent(
                  new OnPointerDown(() => {
                    openExternalURL("https://tsarch.conceptboard.com/board/yu5h-41q3-8k49-dtet-g3x1")
                  }))

              //Board 01
              const board_01 = new Entity()
              board_01.addComponent(new PlaneShape())
              board_01.addComponent(sheet01)
              board_01.addComponent(
                new Transform({
                  position: new Vector3(10, 12.5, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //Board 02
              const board_02 = new Entity()
              board_02.addComponent(new PlaneShape())
              board_02.addComponent(sheet02)
              board_02.addComponent(
                new Transform({
                  position: new Vector3(22, 12.5, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 03
              const board_03 = new Entity()
              board_03.addComponent(new PlaneShape())
              board_03.addComponent(sheet03)
              board_03.addComponent(
                new Transform({
                  position: new Vector3(34, 12.5, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 04
              const board_04 = new Entity()
              board_04.addComponent(new PlaneShape())
              board_04.addComponent(sheet04)
              board_04.addComponent(
                new Transform({
                  position: new Vector3(46, 12.5, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 05
              const board_05 = new Entity()
              board_05.addComponent(new PlaneShape())
              board_05.addComponent(sheet05)
              board_05.addComponent(
                new Transform({
                  position: new Vector3(59, 12.5, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 06
              const board_06 = new Entity()
              board_06.addComponent(new PlaneShape())
              board_06.addComponent(sheet06)
              board_06.addComponent(
                new Transform({
                  position: new Vector3(71, 12.5, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 07
              const board_07 = new Entity()
              board_07.addComponent(new PlaneShape())
              board_07.addComponent(sheet07)
              board_07.addComponent(
                new Transform({
                  position: new Vector3(79.75, 12.5, 12),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 270, 0)
              }))

              //board 08
              const board_08 = new Entity()
              board_08.addComponent(new PlaneShape())
              board_08.addComponent(sheet08)
              board_08.addComponent(
                new Transform({
                  position: new Vector3(79.75, 12.5, 24),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 270, 0)
              }))

              //board 09
              const board_09 = new Entity()
              board_09.addComponent(new PlaneShape())
              board_09.addComponent(sheet09)
              board_09.addComponent(
                new Transform({
                  position: new Vector3(79.75, 12.5, 36),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 270, 0)
              }))

              //board 10
              const board_10 = new Entity()
              board_10.addComponent(new PlaneShape())
              board_10.addComponent(sheet10)
              board_10.addComponent(
                new Transform({
                  position: new Vector3(72, 12.5, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 11
              const board_11 = new Entity()
              board_11.addComponent(new PlaneShape())
              board_11.addComponent(sheet11)
              board_11.addComponent(
                new Transform({
                  position: new Vector3(60, 12.5, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 12
              const board_12 = new Entity()
              board_12.addComponent(new PlaneShape())
              board_12.addComponent(sheet12)
              board_12.addComponent(
                new Transform({
                  position: new Vector3(48, 12.5, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 13
              const board_13 = new Entity()
              board_13.addComponent(new PlaneShape())
              board_13.addComponent(sheet13)
              board_13.addComponent(
                new Transform({
                  position: new Vector3(36, 12.5, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 14
              const board_14 = new Entity()
              board_14.addComponent(new PlaneShape())
              board_14.addComponent(sheet14)
              board_14.addComponent(
                new Transform({
                  position: new Vector3(24, 12.5, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 15
              const board_15 = new Entity()
              board_15.addComponent(new PlaneShape())
              board_15.addComponent(sheet15)
              board_15.addComponent(
                new Transform({
                  position: new Vector3(12, 12.5, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))


              //board 18
              const board_18 = new Entity()
              board_18.addComponent(new PlaneShape())
              board_18.addComponent(sheet07)
              board_18.addComponent(
                new Transform({
                  position: new Vector3(3.25, 12.5, 12),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 90, 0)
              }))

              //board 19
              const board_19 = new Entity()
              board_19.addComponent(new PlaneShape())
              board_19.addComponent(sheet08)
              board_19.addComponent(
                new Transform({
                  position: new Vector3(3.25, 12.5, 24),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 90, 0)
              }))

              //board 20
              const board_20 = new Entity()
              board_20.addComponent(new PlaneShape())
              board_20.addComponent(sheet09)
              board_20.addComponent(
                new Transform({
                  position: new Vector3(3.25, 12.5, 36),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 90, 0)
              }))

              //art 01
              let art01 = new Entity()
              let art01Path:string = "models/art/art_01.glb"
                  art01.addComponent(new GLTFShape(art01Path))
                  art01.addComponent(new Transform({
                      position: new Vector3(40, 16, 24),
                      scale: new Vector3(.1, .1, .1),
                      rotation: Quaternion.Euler(180, 0, 0)
              }))


  //set parent
  greenhouse01.setParent(state01_2)
  link01.setParent(state01_2)
  board_01.setParent(state01_2)
  board_02.setParent(state01_2)
  board_03.setParent(state01_2)
  board_04.setParent(state01_2)
  board_05.setParent(state01_2)
  board_06.setParent(state01_2)
  board_07.setParent(state01_2)
  board_08.setParent(state01_2)
  board_09.setParent(state01_2)
  board_10.setParent(state01_2)
  board_11.setParent(state01_2)
  board_12.setParent(state01_2)
  board_13.setParent(state01_2)
  board_14.setParent(state01_2)
  board_15.setParent(state01_2)
  board_18.setParent(state01_2)
  board_19.setParent(state01_2)
  board_20.setParent(state01_2)
  art01.setParent(state01_2)
  doormask1X_X.setParent(state01_2)


  //State 01_3
  let state01_3 = new Entity()
  state01_3.addComponent(
    new Transform({
      position: new Vector3(0, 0.5, 0)
  }))
  state01_3.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
        engine.addEntity(state01_3),
        engine.removeEntity(state01_1),
        engine.removeEntity(state01_1_1),
        engine.removeEntity(state01_1_2),
        engine.removeEntity(state01_1_3),
        engine.removeEntity(state01_1_4),
        engine.removeEntity(state01_1_5),
        engine.removeEntity(state01_1_6),
        engine.removeEntity(state01_1_7),
        engine.removeEntity(state01_1_8),
        engine.removeEntity(state01_1_9),
        engine.removeEntity(state01_1_10),
        engine.removeEntity(state01_1_11),
        engine.removeEntity(state01_1_12),
        engine.removeEntity(state01_1_13),
        engine.removeEntity(state01_1_14),
        engine.removeEntity(state01_1_15),
        engine.removeEntity(state01_2)
      })
    )

                //doormask 1
                let doormask1XX_Path:string = "models/doormasks/XX_.glb"
                let doormask1XX_ = new Entity()
                    doormask1XX_.addComponent(new GLTFShape(doormask1XX_Path))
                    doormask1XX_.addComponent(new Transform({
                        position: new Vector3(0, -.5, 0),
                        scale: new Vector3(1, 1, 1),
                        rotation: Quaternion.Euler(0, 180, 0)
                    }))


                //spaceframe
                let varc_01 = new Entity()
                let varc_01Path:string = "models/spaceframe/spaceframe_03.glb"
                    varc_01.addComponent(new GLTFShape(varc_01Path))
                    varc_01.addComponent(new Transform({
                        position: new Vector3(0, 0, 0),
                        scale: new Vector3(1, 1, 1),
                        rotation: Quaternion.Euler(0, 180, 0)
                }))
                varc_01.addComponent(
                  new OnPointerDown(() => {
                    openExternalURL("https://world-001.herokuapp.com/?position=-9%2C-7&realm=localhost-stub")
                  })
                )

                //board 16
                const board_16 = new Entity()
                board_16.addComponent(new PlaneShape())
                board_16.addComponent(sheet16)
                board_16.addComponent(
                  new Transform({
                    position: new Vector3(79.75, 3, 32),
                    scale: new Vector3(8, 4, 1),
                    rotation: Quaternion.Euler(180, 270, 0)
                }))
                board_16.addComponent(
                  new OnPointerDown(() => {
                    openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
                  })
                )

                //board 17
                const board_17 = new Entity()
                board_17.addComponent(new PlaneShape())
                board_17.addComponent(sheet17)
                board_17.addComponent(
                  new Transform({
                    position: new Vector3(79.75, 3, 20),
                    scale: new Vector3(8, 4, 1),
                    rotation: Quaternion.Euler(180, 270, 0)
                }))
                board_17.addComponent(
                  new OnPointerDown(() => {
                    openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
                  })
                )

                //board 18
                const board_018 = new Entity()
                board_018.addComponent(new PlaneShape())
                board_018.addComponent(sheet18)
                board_018.addComponent(
                  new Transform({
                    position: new Vector3(79.75, 3, 8),
                    scale: new Vector3(8, 4, 1),
                    rotation: Quaternion.Euler(180, 270, 0)
                }))
                board_018.addComponent(
                  new OnPointerDown(() => {
                    openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
                  })
                )


    //set parent
    varc_01.setParent(state01_3)
    board_16.setParent(state01_3)
    board_17.setParent(state01_3)
    board_018.setParent(state01_3)
    doormask1XX_.setParent(state01_3)











//State 02_1
  let state02_1 = new Entity()
  state02_1.addComponent(
    new Transform({
      position: new Vector3(0, 0.5, 0)
    }))
  state02_1.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
          engine.addEntity(state02_1),
          engine.removeEntity(state02_2),
          engine.removeEntity(state02_2_1),
          engine.removeEntity(state02_2_2),
          engine.removeEntity(state02_2_3),
          engine.removeEntity(state02_3)
    })
  )

              //doormask 2 _XX
              let doormask2_XXPath:string = "models/doormasks/_XX.glb"
              let doormask2_XX = new Entity()
                  doormask2_XX.addComponent(new GLTFShape(doormask2_XXPath))
                  doormask2_XX.addComponent(new Transform({
                      position: new Vector3(0, -.5, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
                  }))

              //Objects

              //Material Host 01
              const obj01 = new Entity()
              obj01.addComponent(new BoxShape())
              obj01.addComponent(material001)
              obj01.addComponent(new Transform({
                  position: new Vector3(24, 40, 8),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 02
              const obj02 = new Entity()
              obj02.addComponent(new BoxShape())
              obj02.addComponent(material001)
              obj02.addComponent(new Transform({
                  position: new Vector3(24, 40, 24),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 03
              const obj03 = new Entity()
              obj03.addComponent(new BoxShape())
              obj03.addComponent(material001)
              obj03.addComponent(new Transform({
                  position: new Vector3(24, 40, 40),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 04
              const obj04 = new Entity()
              obj04.addComponent(new BoxShape())
              obj04.addComponent(material001)
              obj04.addComponent(new Transform({
                  position: new Vector3(40, 40, 8),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 05
              const obj05 = new Entity()
              obj05.addComponent(new BoxShape())
              obj05.addComponent(material001)
              obj05.addComponent(new Transform({
                  position: new Vector3(40, 40, 24),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 06
              const obj06 = new Entity()
              obj06.addComponent(new BoxShape())
              obj06.addComponent(material001)
              obj06.addComponent(new Transform({
                  position: new Vector3(40, 40, 40),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 07
              const obj07 = new Entity()
              obj07.addComponent(new BoxShape())
              obj07.addComponent(material001)
              obj07.addComponent(new Transform({
                  position: new Vector3(56, 40, 8),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 08
              const obj08 = new Entity()
              obj08.addComponent(new BoxShape())
              obj08.addComponent(material001)
              obj08.addComponent(new Transform({
                  position: new Vector3(56, 40, 24),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 09
              const obj09 = new Entity()
              obj09.addComponent(new BoxShape())
              obj09.addComponent(material001)
              obj09.addComponent(new Transform({
                  position: new Vector3(56, 40, 40),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 10
              const obj10 = new Entity()
              obj10.addComponent(new BoxShape())
              obj10.addComponent(material001)
              obj10.addComponent(new Transform({
                  position: new Vector3(72, 40, 8),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 11
              const obj11 = new Entity()
              obj11.addComponent(new BoxShape())
              obj11.addComponent(material001)
              obj11.addComponent(new Transform({
                  position: new Vector3(72, 40, 24),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 12
              const obj12 = new Entity()
              obj12.addComponent(new BoxShape())
              obj12.addComponent(material001)
              obj12.addComponent(new Transform({
                  position: new Vector3(72, 40, 40),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 13
              const obj13 = new Entity()
              obj13.addComponent(new BoxShape())
              obj13.addComponent(material001)
              obj13.addComponent(new Transform({
                  position: new Vector3(8, 40, 8),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 14
              const obj14 = new Entity()
              obj14.addComponent(new BoxShape())
              obj14.addComponent(material001)
              obj14.addComponent(new Transform({
                  position: new Vector3(8, 40, 24),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 15
              const obj15 = new Entity()
              obj15.addComponent(new BoxShape())
              obj15.addComponent(material001)
              obj15.addComponent(new Transform({
                  position: new Vector3(8, 40, 40),
                  scale: new Vector3(4, 80, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

  //set parent
  doormask2_XX.setParent(state02_1)

  obj01.setParent(state02_1)
  obj02.setParent(state02_1)
  obj03.setParent(state02_1)
  obj04.setParent(state02_1)
  obj05.setParent(state02_1)
  obj06.setParent(state02_1)
  obj07.setParent(state02_1)
  obj08.setParent(state02_1)
  obj09.setParent(state02_1)
  obj10.setParent(state02_1)
  obj11.setParent(state02_1)
  obj12.setParent(state02_1)
  obj13.setParent(state02_1)
  obj14.setParent(state02_1)
  obj15.setParent(state02_1)



  //State 02_2
  let state02_2 = new Entity()
  state02_2.addComponent(
    new Transform({
      position: new Vector3(0, 0.5, 0)
    }))
  state02_2.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
          engine.addEntity(state02_2),
          engine.addEntity(state02_2_1),
          engine.removeEntity(state02_2_2),
          engine.removeEntity(state02_2_3),
          engine.removeEntity(state02_1),
          engine.removeEntity(state02_3)
    })
  )

              //doormask 2 X_X
              let doormask2X_XPath:string = "models/doormasks/X_X.glb"
              let doormask2X_X = new Entity()
                  doormask2X_X.addComponent(new GLTFShape(doormask2X_XPath))
                  doormask2X_X.addComponent(new Transform({
                      position: new Vector3(0, -.5, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
                  }))

              //Table
              const table002 = new Entity()
              let table002Path:string = "models/table/table_01.glb"
              table002.addComponent(new GLTFShape(table002Path))
              table002.addComponent(new Transform({
                position: new Vector3(72, 0, 24),
                scale: new Vector3(1, 1, 1)
              }))

              //Trigger gh 01
              const boxgh01 = new Entity()
              boxgh01.addComponent(new BoxShape())
              boxgh01.addComponent(material002)
              boxgh01.addComponent(new Transform({
                position: new Vector3(72, 1.5, 28),
                scale: new Vector3(.5, .5, .5),
                rotation: Quaternion.Euler(0, 0, 0)
                }))
              boxgh01.addComponent(
                  new OnClick(event => {
                    state02_2_1.getComponent(utils.ToggleComponent).toggle()
                  })
              )

              //Trigger gh 02
              const boxgh02 = new Entity()
              boxgh02.addComponent(new BoxShape())
              boxgh02.addComponent(material002)
              boxgh02.addComponent(new Transform({
                position: new Vector3(72, 1.5, 20),
                scale: new Vector3(.5, .5, .5),
                rotation: Quaternion.Euler(0, 0, 0)
                }))
              boxgh02.addComponent(
                  new OnClick(event => {
                    state02_2_2.getComponent(utils.ToggleComponent).toggle()
                  })
              )

              //Trigger gh 03
              const boxgh03 = new Entity()
              boxgh03.addComponent(new BoxShape())
              boxgh03.addComponent(material002)
              boxgh03.addComponent(new Transform({
                position: new Vector3(72, 1.5, 24),
                scale: new Vector3(.5, .5, .5),
                rotation: Quaternion.Euler(0, 0, 0)
                }))
              boxgh03.addComponent(
                  new OnClick(event => {
                    state02_2_3.getComponent(utils.ToggleComponent).toggle()
                  })
              )




              //State 02_2_1
              let state02_2_1 = new Entity()
              state02_2_1.addComponent(
                  new utils.ToggleComponent(utils.ToggleState.Off, value => {
                    engine.addEntity(state02_2_1)
                    engine.removeEntity(state02_2_2)
                    engine.removeEntity(state02_2_3)
                })
              )
                      //gh 01
                      let gh01Path:string = "models/spiral/spiral_03.glb"
                      let gh01 = new Entity()
                          gh01.addComponent(new GLTFShape(gh01Path))
                          gh01.addComponent(new Transform({
                            position: new Vector3(48, 0, 24),
                            scale: new Vector3(15, 20, 15),
                            rotation: Quaternion.Euler(0, 0, 0)
                          }))


              gh01.setParent(state02_2_1)


              //State 02_2_2
              let state02_2_2 = new Entity()
              state02_2_2.addComponent(
                  new utils.ToggleComponent(utils.ToggleState.Off, value => {
                    engine.addEntity(state02_2_2)
                    engine.removeEntity(state02_2_1)
                    engine.removeEntity(state02_2_3)
                })
              )

                        //gh02
                        let gh02 = new Entity()
                        let gh02Path:string = "models/spiral/spiral_02.glb"
                            gh02.addComponent(new GLTFShape(gh02Path))
                            gh02.addComponent(new Transform({
                                position: new Vector3(48, 0, 24),
                                scale: new Vector3(1000, 1200, 1000),
                                rotation: Quaternion.Euler(0, 90, 0)
                        }))

            gh02.setParent(state02_2_2)

            //State 02_2_3
            let state02_2_3 = new Entity()
            state02_2_3.addComponent(
                new utils.ToggleComponent(utils.ToggleState.Off, value => {
                  engine.addEntity(state02_2_3)
                  engine.removeEntity(state02_2_1)
                  engine.removeEntity(state02_2_2)
              })
            )

                      //gh03
                      let gh03 = new Entity()
                      let gh03Path:string = "models/spiral/spiral_04.glb"
                          gh03.addComponent(new GLTFShape(gh03Path))
                          gh03.addComponent(new Transform({
                            position: new Vector3(48, 0, 24),
                            scale: new Vector3(3.5, 5, 3.5),
                            rotation: Quaternion.Euler(0, 90, 0)
                      }))

          gh03.setParent(state02_2_3)



  //set parent
  doormask2X_X.setParent(state02_2)

  table002.setParent(state02_2)
  boxgh01.setParent(state02_2)
  boxgh02.setParent(state02_2)
  boxgh03.setParent(state02_2)




  //State 02_3
  let state02_3 = new Entity()
  state02_3.addComponent(
    new Transform({
      position: new Vector3(0, 0.5, 0)
    }))
  state02_3.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
          engine.addEntity(state02_3),
          engine.removeEntity(state02_1),
          engine.removeEntity(state02_2),
          engine.removeEntity(state02_2_1),
          engine.removeEntity(state02_2_2),
          engine.removeEntity(state02_2_3)
    })
  )

              //doormask 2 XX_
              let doormask2XX_Path:string = "models/doormasks/XX_.glb"
              let doormask2XX_ = new Entity()
                  doormask2XX_.addComponent(new GLTFShape(doormask2XX_Path))
                  doormask2XX_.addComponent(new Transform({
                      position: new Vector3(0, -.5, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
                  }))

              //Wall 01
              const wall01 = new Entity()
              wall01.addComponent(new BoxShape())
              wall01.addComponent(material002)
              wall01.addComponent(new Transform({
                position: new Vector3(40, 10, .5),
                scale: new Vector3(80, 20, 1),
                rotation: Quaternion.Euler(0, 0, 0)
              }))

              //Wall 02
              const wall02 = new Entity()
              wall02.addComponent(new BoxShape())
              wall02.addComponent(material002)
              wall02.addComponent(new Transform({
                position: new Vector3(40, 10, 47.5),
                scale: new Vector3(80, 20, 1),
                rotation: Quaternion.Euler(0, 0, 0)
              }))

              //Wall 03
              const wall03 = new Entity()
              wall03.addComponent(new BoxShape())
              wall03.addComponent(material003)
              wall03.addComponent(new Transform({
                position: new Vector3(0.5, 10, 24),
                scale: new Vector3(1, 20, 46),
                rotation: Quaternion.Euler(0, 0, 0)
              }))

              //Ceiling
              const wall04 = new Entity()
              wall04.addComponent(new BoxShape())
              wall04.addComponent(material002)
              wall04.addComponent(new Transform({
                position: new Vector3(40, 20, 24),
                scale: new Vector3(80, 1, 48),
                rotation: Quaternion.Euler(0, 0, 0)
              }))

              //Floor
              const wall05 = new Entity()
              wall05.addComponent(new BoxShape())
              wall05.addComponent(material002)
              wall05.addComponent(new Transform({
                position: new Vector3(40, .01, 24),
                scale: new Vector3(80, .1, 48),
                rotation: Quaternion.Euler(0, 0, 0)
              }))

              //back exterior wall
              const wall06 = new Entity()
              wall06.addComponent(new BoxShape())
              wall06.addComponent(material002)
              wall06.addComponent(new Transform({
                position: new Vector3(80.5, 15, 24),
                scale: new Vector3(1, 11, 48),
                rotation: Quaternion.Euler(0, 0, 0)
              }))

              // song
              const song = new Entity()
              const clip = new AudioClip("sounds/kal_01.mp3")
              const source = new AudioSource(clip)
              song.addComponent(new SphereShape())
              song.addComponent(source)
              song.getComponent(SphereShape).withCollisions = false
              song.getComponent(SphereShape).visible = true
              song.addComponent(material002)
              song.addComponent(new Transform({
                  position: new Vector3(10, 10, 24),
                  scale: new Vector3(3, 3, 3)
              }))
              source.playing = true
              song.addComponent(
                new OnPointerDown(() => {
                  openExternalURL("https://world-002.herokuapp.com/?position=-5%2C-2&realm=localhost-stub")
                })
              )

//set parent
doormask2XX_.setParent(state02_3)

wall01.setParent(state02_3)
wall02.setParent(state02_3)
wall03.setParent(state02_3)
wall04.setParent(state02_3)
wall05.setParent(state02_3)
wall06.setParent(state02_3)
song.setParent(state02_3)










//State 03_1
  let state03_1 = new Entity()
  state03_1.addComponent(
    new Transform({
      position: new Vector3(0, 0, 0)
    }))
  state03_1.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
          engine.addEntity(state03_1),
          engine.removeEntity(state03_2),
          engine.removeEntity(state03_3)
    })
  )

              //doormask 3 _XX
              let doormask3_XXPath:string = "models/doormasks/_XX.glb"
              let doormask3_XX = new Entity()
                  doormask3_XX.addComponent(new GLTFShape(doormask3_XXPath))
                  doormask3_XX.addComponent(new Transform({
                      position: new Vector3(0, 0, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
                  }))

                //topo frame
                let frame_01 = new Entity()
                let frame_01Path:string = "models/topo/frame_01.glb"
                    frame_01.addComponent(new GLTFShape(frame_01Path))
                    frame_01.addComponent(new Transform({
                        position: new Vector3(0, 0, 0),
                        scale: new Vector3(1, 1, 1),
                        rotation: Quaternion.Euler(0, 180, 0)
                }))

                //topo frame
                let topo_01 = new Entity()
                let topo_01Path:string = "models/topo/framed_topo.glb"
                    topo_01.addComponent(new GLTFShape(topo_01Path))
                    topo_01.addComponent(new Transform({
                        position: new Vector3(0, 0, 0),
                        scale: new Vector3(1, 1, 1),
                        rotation: Quaternion.Euler(0, 180, 0)
                }))

  //set parent
  doormask3_XX.setParent(state03_1)
  frame_01.setParent(state03_1)
  topo_01.setParent(state03_1)


  //State 03_2
  let state03_2 = new Entity()
  state03_2.addComponent(
    new Transform({
      position: new Vector3(0, 0, 0)
    }))
  state03_2.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
          engine.addEntity(state03_2),
          engine.removeEntity(state03_1),
          engine.removeEntity(state03_3)
    })
  )
              //doormask 3 X_X
              let doormask3X_XPath:string = "models/doormasks/X_X.glb"
              let doormask3X_X = new Entity()
                  doormask3X_X.addComponent(new GLTFShape(doormask3X_XPath))
                  doormask3X_X.addComponent(new Transform({
                      position: new Vector3(0, 0, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
                  }))

              //capsule tower
              let ct_01 = new Entity()
              let ct_01Path:string = "models/ct/ct_01.glb"
                  ct_01.addComponent(new GLTFShape(ct_01Path))
                  ct_01.addComponent(new Transform({
                      position: new Vector3(0, 0.5, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
              }))

  //set parent
  doormask3X_X.setParent(state03_2)
  ct_01.setParent(state03_2)


  //State 03_3
  let state03_3 = new Entity()
  state03_3.addComponent(
    new Transform({
      position: new Vector3(0, 0.5, 0)
    }))
  state03_3.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
          engine.addEntity(state03_3),
          engine.removeEntity(state03_1),
          engine.removeEntity(state03_2)
    })
  )

              //doormask 3 XX_
              let doormask3XX_Path:string = "models/doormasks/XX_.glb"
              let doormask3XX_ = new Entity()
                  doormask3XX_.addComponent(new GLTFShape(doormask3XX_Path))
                  doormask3XX_.addComponent(new Transform({
                      position: new Vector3(0, -.5, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
                  }))

//set parent
doormask3XX_.setParent(state03_3)
