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


//State 00 - Parent
let state00 = new Entity()
engine.addEntity(state00)

    //Circulation
    let circPath:string = "models/circ/circ_03.glb"
    let circ = new Entity()
        circ.addComponent(new GLTFShape(circPath))
        circ.addComponent(new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
        }))

    //Door
    let doorPath:string = "models/circ/doors_05.glb"
    let door = new Entity()
        door.addComponent(new GLTFShape(doorPath))
        door.addComponent(new Transform({
            position: new Vector3(0, 0, 0),
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
          position: new Vector3(8, 1, 47),
          scale: new Vector3(4, 4, .5)
        }))
        respawner01.addComponent(
          new utils.TriggerComponent(triggerBox07, {
            onCameraEnter: () => {
              movePlayerTo({ x: 8, y: 0, z: 3 })
          }}))

    //Respawner 2
    let respawner02 = new Entity()
    let triggerBox08 = new utils.TriggerBoxShape()
        respawner02.addComponent(new BoxShape())
        respawner02.getComponent(BoxShape).withCollisions = false
        respawner02.getComponent(BoxShape).visible = false
        respawner02.addComponent(new Transform({
          position: new Vector3(8, 1, 1),
          scale: new Vector3(4, 4, .5)
        }))
        respawner02.addComponent(
          new utils.TriggerComponent(triggerBox08, {
            onCameraEnter: () => {
              movePlayerTo({ x: 8, y: 0, z: 45 })
          }}))

//Set parent
circ.setParent(state00)
door.setParent(state00)
respawner01.setParent(state00)
respawner02.setParent(state00)











//State 01 - Parent
let state01 = new Entity()
state01.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0)
}))
engine.addEntity(state01)
state01.addComponent(
    new utils.ToggleComponent(utils.ToggleState.On, value => {
    if (value == utils.ToggleState.Off) {
        engine.removeEntity(state02),
        engine.removeEntity(state02_1),
        engine.removeEntity(state02_2),
        engine.removeEntity(state02_3),
        engine.removeEntity(state03),
        engine.removeEntity(state03_1),
        engine.removeEntity(state03_2),
        engine.removeEntity(state03_3),
        engine.addEntity(state01)
      } else {
        engine.removeEntity(state01)
      }
  })
)

    //tag 01
    let tag01 = new Entity()
    let tag01Path:string = "models/tags/tags_1-3_02.glb"
        tag01.addComponent(new GLTFShape(tag01Path))
        tag01.addComponent(new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
    }))

    //Ground 01_1
    const ground01_1 = new Entity()
    ground01_1.addComponent(new BoxShape())
    ground01_1.getComponent(BoxShape).visible = true
    ground01_1.addComponent(material01)
    ground01_1.addComponent(
      new Transform({
        position: new Vector3(8, 0, 8),
        scale: new Vector3(16, .001, 16),
    }))

    //Ground 01_2
    const ground01_2 = new Entity()
    ground01_2.addComponent(new BoxShape())
    ground01_2.getComponent(BoxShape).visible = true
    ground01_2.addComponent(material02)
    ground01_2.addComponent(
      new Transform({
        position: new Vector3(8, 0, 24),
        scale: new Vector3(16, .001, 16),
    }))

    //Ground 01_3
    const ground01_3 = new Entity()
    ground01_3.addComponent(new BoxShape())
    ground01_3.getComponent(BoxShape).visible = true
    ground01_3.addComponent(material03)
    ground01_3.addComponent(
      new Transform({
        position: new Vector3(8, 0, 40),
        scale: new Vector3(16, .001, 16),
    }))

    //State Trigger 01 to 02
    const st102 = new Entity()
    st102.addComponent(new BoxShape())
    st102.getComponent(BoxShape).withCollisions = false
    st102.getComponent(BoxShape).visible = false
    st102.addComponent(material02)
    st102.addComponent(new Transform({
      position: new Vector3(8, 1, 47),
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
    st103.addComponent(material03)
    st103.addComponent(new Transform({
      position: new Vector3(8, 1, 1),
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
      position: new Vector3(14, 1, 8),
      scale: new Vector3(1, 4, 4)
      }))
    box01.addComponent(
      new utils.TriggerComponent(
        triggerBox09,
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
      position: new Vector3(14, 1, 24),
      scale: new Vector3(1, 4, 4)
      }))
    box02.addComponent(
      new utils.TriggerComponent(
        triggerBox10,
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
    box03.addComponent(material03)
    box03.addComponent(new Transform({
      position: new Vector3(14, 1, 40),
      scale: new Vector3(1, 4, 4)
      }))
    box03.addComponent(
      new utils.TriggerComponent(
        triggerBox11,
      {
        onCameraEnter :() => {
          log('triggered!')
          state01_3.getComponent(utils.ToggleComponent).toggle()}
    }))

//Set parent
tag01.setParent(state01)
ground01_1.setParent(state01)
ground01_2.setParent(state01)
ground01_3.setParent(state01)
st102.setParent(state01)
st103.setParent(state01)
box01.setParent(state01)
box02.setParent(state01)
box03.setParent(state01)









//State 02 - Parent
let state02 = new Entity()
state02.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0)
}))
state02.addComponent(
    new utils.ToggleComponent(utils.ToggleState.Off, value => {
    if (value == utils.ToggleState.On) {
        engine.removeEntity(state01),
        engine.removeEntity(state01_1),
        engine.removeEntity(state01_2),
        engine.removeEntity(state01_3),
        engine.removeEntity(state03),
        engine.removeEntity(state03_1),
        engine.removeEntity(state03_2),
        engine.removeEntity(state03_3),
        engine.addEntity(state02)

      } else {
        engine.removeEntity(state02)
      }
  })
)

    //tag 02
    let tag02 = new Entity()
    let tag02Path:string = "models/tags/tags_4-6_02.glb"
        tag02.addComponent(new GLTFShape(tag02Path))
        tag02.addComponent(new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
    }))

    //Ground 02_1
    const ground02_1 = new Entity()
    ground02_1.addComponent(new BoxShape())
    ground02_1.getComponent(BoxShape).visible = true
    ground02_1.addComponent(material04)
    ground02_1.addComponent(
      new Transform({
        position: new Vector3(8, 0, 8),
        scale: new Vector3(16, .001, 16),
    }))

    //Ground 02_2
    const ground02_2 = new Entity()
    ground02_2.addComponent(new BoxShape())
    ground02_2.getComponent(BoxShape).visible = true
    ground02_2.addComponent(material05)
    ground02_2.addComponent(
      new Transform({
        position: new Vector3(8, 0, 24),
        scale: new Vector3(16, .001, 16),
    }))

    //Ground 02_3
    const ground02_3 = new Entity()
    ground02_3.addComponent(new BoxShape())
    ground02_3.getComponent(BoxShape).visible = true
    ground02_3.addComponent(material06)
    ground02_3.addComponent(
      new Transform({
        position: new Vector3(8, 0, 40),
        scale: new Vector3(16, .001, 16),
    }))

    //State Trigger 02 to 01
    const st201 = new Entity()
    st201.addComponent(new BoxShape())
    st201.getComponent(BoxShape).withCollisions = false
    st201.getComponent(BoxShape).visible = false
    st201.addComponent(material01)
    st201.addComponent(new Transform({
      position: new Vector3(8, 1, 1),
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
    st203.addComponent(material03)
    st203.addComponent(new Transform({
      position: new Vector3(8, 1, 47),
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
      position: new Vector3(15, 1, 8),
      scale: new Vector3(1, 4, 4)
      }))
    box04.addComponent(
      new utils.TriggerComponent(
        triggerBox12,
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
      position: new Vector3(15, 1, 24),
      scale: new Vector3(1, 4, 4)
      }))
    box05.addComponent(
      new utils.TriggerComponent(
        triggerBox13,
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
      position: new Vector3(15, 1, 40),
      scale: new Vector3(1, 4, 4)
      }))
    box06.addComponent(
      new utils.TriggerComponent(
        triggerBox14,
      {
        onCameraEnter :() => {
          log('triggered!')
          state02_3.getComponent(utils.ToggleComponent).toggle()}
    }))

//Set parent
tag02.setParent(state02)
ground02_1.setParent(state02)
ground02_2.setParent(state02)
ground02_3.setParent(state02)
st201.setParent(state02)
st203.setParent(state02)
box04.setParent(state02)
box05.setParent(state02)
box06.setParent(state02)








//State 03 - Parent
let state03 = new Entity()
state03.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0)
}))
state03.addComponent(
    new utils.ToggleComponent(utils.ToggleState.Off, value => {
    if (value == utils.ToggleState.On) {
        engine.removeEntity(state01),
        engine.removeEntity(state01_1),
        engine.removeEntity(state01_2),
        engine.removeEntity(state01_3),
        engine.removeEntity(state02),
        engine.removeEntity(state02_1),
        engine.removeEntity(state02_2),
        engine.removeEntity(state02_3),
        engine.addEntity(state03)
      } else {
        engine.removeEntity(state03)
      }
  })
)

    //tag 03
    let tag03 = new Entity()
    let tag03Path:string = "models/tags/tags_7-9_02.glb"
        tag03.addComponent(new GLTFShape(tag03Path))
        tag03.addComponent(new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: Quaternion.Euler(0, 180, 0)
    }))

    //Ground 03_1
    const ground03_1 = new Entity()
    ground03_1.addComponent(new BoxShape())
    ground03_1.getComponent(BoxShape).visible = true
    ground03_1.addComponent(material07)
    ground03_1.addComponent(
      new Transform({
        position: new Vector3(8, 0, 8),
        scale: new Vector3(16, .001, 16),
    }))

    //Ground 03_2
    const ground03_2 = new Entity()
    ground03_2.addComponent(new BoxShape())
    ground03_2.getComponent(BoxShape).visible = true
    ground03_2.addComponent(material08)
    ground03_2.addComponent(
      new Transform({
        position: new Vector3(8, 0, 24),
        scale: new Vector3(16, .001, 16),
    }))

    //Ground 03_3
    const ground03_3 = new Entity()
    ground03_3.addComponent(new BoxShape())
    ground03_3.getComponent(BoxShape).visible = true
    ground03_3.addComponent(material09)
    ground03_3.addComponent(
      new Transform({
        position: new Vector3(8, 0, 40),
        scale: new Vector3(16, .001, 16),
    }))

    //State Trigger 03 to 02
    const st302 = new Entity()
    st302.addComponent(new BoxShape())
    st302.getComponent(BoxShape).withCollisions = false
    st302.getComponent(BoxShape).visible = false
    st302.addComponent(material02)
    st302.addComponent(new Transform({
      position: new Vector3(8, 1, 1),
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
    st301.addComponent(material01)
    st301.addComponent(new Transform({
      position: new Vector3(8, 1, 47),
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
      position: new Vector3(15, 1, 8),
      scale: new Vector3(1, 4, 4)
      }))
    box07.addComponent(
      new utils.TriggerComponent(
        triggerBox15,
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
      position: new Vector3(15, 1, 24),
      scale: new Vector3(1, 4, 4)
      }))
    box08.addComponent(
      new utils.TriggerComponent(
        triggerBox16,
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
      position: new Vector3(15, 1, 40),
      scale: new Vector3(1, 4, 4)
      }))
    box09.addComponent(
      new utils.TriggerComponent(
        triggerBox17,
      {
        onCameraEnter :() => {
          log('triggered!')
          state03_3.getComponent(utils.ToggleComponent).toggle()}
    }))

//Set parent
tag03.setParent(state03)
ground03_1.setParent(state03)
ground03_2.setParent(state03)
ground03_3.setParent(state03)
st302.setParent(state03)
st301.setParent(state03)
box07.setParent(state03)
box08.setParent(state03)
box09.setParent(state03)
























//State 01_1
  let state01_1 = new Entity()
  state01_1.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state01_1),
          engine.removeEntity(state01_2),
          engine.removeEntity(state01_3)
        } else {
          engine.addEntity(state01_1)
        }
    })
  )
              //content 01_1
              let content01_1 = new Entity()
              content01_1.addComponent(new BoxShape())
              content01_1.getComponent(BoxShape).withCollisions = true
              content01_1.getComponent(BoxShape).visible = true
              content01_1.addComponent(material01)
              content01_1.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
              }))

              //greenhouse 01
              let greenhouse01 = new Entity()
              let greenhouse01Path:string = "models/states/S2_02.1.glb"
                  greenhouse01.addComponent(new GLTFShape(greenhouse01Path))
                  greenhouse01.addComponent(new Transform({
                      position: new Vector3(0, 0, 0),
                      scale: new Vector3(1, 1, 1),
                      rotation: Quaternion.Euler(0, 180, 0)
              }))

              //link 01 - conceptboard
              const link01 = new Entity()
              link01.addComponent(new BoxShape())
              const transform01 = new Transform({
                position: new Vector3(64, 1, 24) })
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
                  position: new Vector3(23, 4, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //Board 02
              const board_02 = new Entity()
              board_02.addComponent(new PlaneShape())
              board_02.addComponent(sheet02)
              board_02.addComponent(
                new Transform({
                  position: new Vector3(35, 4, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 03
              const board_03 = new Entity()
              board_03.addComponent(new PlaneShape())
              board_03.addComponent(sheet03)
              board_03.addComponent(
                new Transform({
                  position: new Vector3(47, 4, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 04
              const board_04 = new Entity()
              board_04.addComponent(new PlaneShape())
              board_04.addComponent(sheet04)
              board_04.addComponent(
                new Transform({
                  position: new Vector3(59, 4, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 05
              const board_05 = new Entity()
              board_05.addComponent(new PlaneShape())
              board_05.addComponent(sheet05)
              board_05.addComponent(
                new Transform({
                  position: new Vector3(72, 4, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 06
              const board_06 = new Entity()
              board_06.addComponent(new PlaneShape())
              board_06.addComponent(sheet06)
              board_06.addComponent(
                new Transform({
                  position: new Vector3(84, 4, 3.25),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 0, 0)
              }))

              //board 07
              const board_07 = new Entity()
              board_07.addComponent(new PlaneShape())
              board_07.addComponent(sheet07)
              board_07.addComponent(
                new Transform({
                  position: new Vector3(92.75, 4, 12),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 270, 0)
              }))

              //board 08
              const board_08 = new Entity()
              board_08.addComponent(new PlaneShape())
              board_08.addComponent(sheet08)
              board_08.addComponent(
                new Transform({
                  position: new Vector3(92.75, 4, 24),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 270, 0)
              }))

              //board 09
              const board_09 = new Entity()
              board_09.addComponent(new PlaneShape())
              board_09.addComponent(sheet09)
              board_09.addComponent(
                new Transform({
                  position: new Vector3(92.75, 4, 36),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 270, 0)
              }))

              //board 10
              const board_10 = new Entity()
              board_10.addComponent(new PlaneShape())
              board_10.addComponent(sheet10)
              board_10.addComponent(
                new Transform({
                  position: new Vector3(85, 4, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 11
              const board_11 = new Entity()
              board_11.addComponent(new PlaneShape())
              board_11.addComponent(sheet11)
              board_11.addComponent(
                new Transform({
                  position: new Vector3(73, 4, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 12
              const board_12 = new Entity()
              board_12.addComponent(new PlaneShape())
              board_12.addComponent(sheet12)
              board_12.addComponent(
                new Transform({
                  position: new Vector3(61, 4, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 13
              const board_13 = new Entity()
              board_13.addComponent(new PlaneShape())
              board_13.addComponent(sheet13)
              board_13.addComponent(
                new Transform({
                  position: new Vector3(49, 4, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 14
              const board_14 = new Entity()
              board_14.addComponent(new PlaneShape())
              board_14.addComponent(sheet14)
              board_14.addComponent(
                new Transform({
                  position: new Vector3(37, 4, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

              //board 15
              const board_15 = new Entity()
              board_15.addComponent(new PlaneShape())
              board_15.addComponent(sheet15)
              board_15.addComponent(
                new Transform({
                  position: new Vector3(25, 4, 44.75),
                  scale: new Vector3(9.5, 5.5, 1),
                  rotation: Quaternion.Euler(180, 180, 0)
              }))

  //set parent
  content01_1.setParent(state01_1)
  greenhouse01.setParent(state01_1)
  link01.setParent(state01_1)
  board_01.setParent(state01_1)
  board_02.setParent(state01_1)
  board_03.setParent(state01_1)
  board_04.setParent(state01_1)
  board_05.setParent(state01_1)
  board_06.setParent(state01_1)
  board_07.setParent(state01_1)
  board_08.setParent(state01_1)
  board_09.setParent(state01_1)
  board_10.setParent(state01_1)
  board_11.setParent(state01_1)
  board_12.setParent(state01_1)
  board_13.setParent(state01_1)
  board_14.setParent(state01_1)
  board_15.setParent(state01_1)


  //State 01_2
  let state01_2 = new Entity()
  state01_2.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state01_2),
          engine.removeEntity(state01_1),
          engine.removeEntity(state01_3)
        } else {
          engine.addEntity(state01_2)
        }
    })
  )
              //content 01_2
              let content01_2 = new Entity()
              content01_2.addComponent(new BoxShape())
              content01_2.getComponent(BoxShape).withCollisions = true
              content01_2.getComponent(BoxShape).visible = true
              content01_2.addComponent(material02)
              content01_2.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
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

              //board 16
              const board_16 = new Entity()
              board_16.addComponent(new PlaneShape())
              board_16.addComponent(sheet16)
              board_16.addComponent(
                new Transform({
                  position: new Vector3(16.25, 3, 32),
                  scale: new Vector3(8, 4, 1),
                  rotation: Quaternion.Euler(180, 90, 0)
              }))

              //board 17
              const board_17 = new Entity()
              board_17.addComponent(new PlaneShape())
              board_17.addComponent(sheet17)
              board_17.addComponent(
                new Transform({
                  position: new Vector3(16.25, 3, 16),
                  scale: new Vector3(8, 4, 1),
                  rotation: Quaternion.Euler(180, 90, 0)
              }))

              //link 02 - conceptboard
              const link02 = new Entity()
              link02.addComponent(new BoxShape())
              const transform02 = new Transform({
                position: new Vector3(64, 1, 24) })
              link02.addComponent(transform01)
                link02.addComponent(
                  new OnPointerDown(() => {
                    openExternalURL("https://world-001.herokuapp.com/?position=-9%2C-7&realm=localhost-stub")
                  }))

  //set parent
  content01_2.setParent(state01_2)
  varc_01.setParent(state01_2)
  board_16.setParent(state01_2)
  board_17.setParent(state01_2)
  link02.setParent(state01_2)

  //State 01_3
  let state01_3 = new Entity()
  state01_3.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state01_3),
          engine.removeEntity(state01_1),
          engine.removeEntity(state01_2)
        } else {
          engine.addEntity(state01_3)
        }
    })
  )

              //content 01_3
              let content01_3 = new Entity()
              content01_3.addComponent(new BoxShape())
              content01_3.getComponent(BoxShape).withCollisions = true
              content01_3.getComponent(BoxShape).visible = true
              content01_3.addComponent(material03)
              content01_3.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
              }))

              //maze
              let maze = new Entity()
              let mazePath:string = "models/content/maze_05_single.glb"
                  maze.addComponent(new GLTFShape(mazePath))
                  maze.addComponent(new Transform({
                      position: new Vector3(32, 0, 8),
                      scale: new Vector3(.25, .25, .25),
                      rotation: Quaternion.Euler(0, 0, 0)
              }))

              //tower
              let tower = new Entity()
              let towerPath:string = "models/content/red_1x1_pool.glb"
                  tower.addComponent(new GLTFShape(towerPath))
                  tower.addComponent(new Transform({
                      position: new Vector3(48, 0, 8),
                      scale: new Vector3(.25, .25, .25),
                      rotation: Quaternion.Euler(0, 180, 0)
              }))

              //Domino
              let domino = new Entity()
              let dominoPath:string = "models/content/Domino_01.glb"
                  domino.addComponent(new GLTFShape(dominoPath))
                  domino.addComponent(new Transform({
                      position: new Vector3(64, 0, 8),
                      scale: new Vector3(.5, .5, .5),
                      rotation: Quaternion.Euler(0, 180, 0)
              }))

              //Cell
              let cell = new Entity()
              let cellPath:string = "models/content/cell_01.glb"
                  cell.addComponent(new GLTFShape(cellPath))
                  cell.addComponent(new Transform({
                      position: new Vector3(82, 0, 8),
                      scale: new Vector3(.25, .25, .25),
                      rotation: Quaternion.Euler(0, 90, 0)
              }))

              //mastaba
              let mastaba = new Entity()
              let mastabaPath:string = "models/content/unit_01.glb"
                  mastaba.addComponent(new GLTFShape(mastabaPath))
                  mastaba.addComponent(new Transform({
                      position: new Vector3(32, 0, 40),
                      scale: new Vector3(.25, .25, .25),
                      rotation: Quaternion.Euler(0, 0, 0)
              }))

              //jilxt
              let jilxt = new Entity()
              let jilxtPath:string = "models/content/JILXT_03.glb"
                  jilxt.addComponent(new GLTFShape(jilxtPath))
                  jilxt.addComponent(new Transform({
                      position: new Vector3(80, 0, 36),
                      scale: new Vector3(.175, .175, .175),
                      rotation: Quaternion.Euler(0, 90, 0)
              }))

              //zoser
              let zoser = new Entity()
              let zoserPath:string = "models/content/VARC_zoser.glb"
                  zoser.addComponent(new GLTFShape(zoserPath))
                  zoser.addComponent(new Transform({
                      position: new Vector3(48, 0, 40),
                      scale: new Vector3(.175, .175, .175),
                      rotation: Quaternion.Euler(0, 90, 0)
              }))

              //link 03 - portfolio
              const link03 = new Entity()
              link03.addComponent(new BoxShape())
              const transform03 = new Transform({
                position: new Vector3(64, 1, 24) })
              link03.addComponent(transform03)
                link03.addComponent(
                  new OnPointerDown(() => {
                    openExternalURL("https://world-002.herokuapp.com/?position=-5%2C-2&realm=localhost-stub")
                  }))

//set parent
content01_3.setParent(state01_3)
maze.setParent(state01_3)
tower.setParent(state01_3)
domino.setParent(state01_3)
cell.setParent(state01_3)
zoser.setParent(state01_3)
jilxt.setParent(state01_3)
mastaba.setParent(state01_3)
link03.setParent(state01_3)








//State 02_1
  let state02_1 = new Entity()
  state02_1.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state02_1),
          engine.removeEntity(state02_2),
          engine.removeEntity(state02_3)
        } else {
          engine.addEntity(state02_1)
        }
    })
  )
              //content 02_1
              let content02_1 = new Entity()
              content02_1.addComponent(new BoxShape())
              content02_1.getComponent(BoxShape).withCollisions = true
              content02_1.getComponent(BoxShape).visible = true
              content02_1.addComponent(material04)
              content02_1.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
              }))

              //circle 01
              let circle_01 = new Entity()
              let circle_01Path:string = "models/circle/circle_03.glb"
                  circle_01.addComponent(new GLTFShape(circle_01Path))
                  circle_01.addComponent(new Transform({
                      position: new Vector3(0, -2, 0),
                      scale: new Vector3(.75, .75, .75),
                      rotation: Quaternion.Euler(0, 180, 0)
              }))

  //set parent
  content02_1.setParent(state02_1)
  circle_01.setParent(state02_1)



  //State 02_2
  let state02_2 = new Entity()
  state02_2.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state02_2),
          engine.removeEntity(state02_1),
          engine.removeEntity(state02_3)
        } else {
          engine.addEntity(state02_2)
        }
    })
  )
              //content 02_2
              let content02_2 = new Entity()
              content02_2.addComponent(new BoxShape())
              content02_2.getComponent(BoxShape).withCollisions = true
              content02_2.getComponent(BoxShape).visible = true
              content02_2.addComponent(material05)
              content02_2.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
              }))

              //Material 06
              const material001 = new Material()
                    material001.metallic = 0
                    material001.roughness = .5

              class ColorSystem {
                  fraction:number = 0

                  update(dt:number){
                      this.fraction += dt * 0.01
                      if(this.fraction > 1){
                          this.fraction = 0
                      }
                      material001.albedoColor = Color4.Lerp(new Color4(1, 1, 1.5, .75), new Color4(0, 0, 1.5, 0), this.fraction)
                  }
              }
              engine.addSystem(new ColorSystem())


              //Objects

              //Material Host 01
              const obj01 = new Entity()
              obj01.addComponent(new BoxShape())
              obj01.addComponent(material001)
              obj01.addComponent(new Transform({
                  position: new Vector3(24, 3, 8),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 02
              const obj02 = new Entity()
              obj02.addComponent(new BoxShape())
              obj02.addComponent(material001)
              obj02.addComponent(new Transform({
                  position: new Vector3(24, 3, 24),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 03
              const obj03 = new Entity()
              obj03.addComponent(new BoxShape())
              obj03.addComponent(material001)
              obj03.addComponent(new Transform({
                  position: new Vector3(24, 3, 40),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 04
              const obj04 = new Entity()
              obj04.addComponent(new BoxShape())
              obj04.addComponent(material001)
              obj04.addComponent(new Transform({
                  position: new Vector3(40, 3, 8),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 05
              const obj05 = new Entity()
              obj05.addComponent(new BoxShape())
              obj05.addComponent(material001)
              obj05.addComponent(new Transform({
                  position: new Vector3(40, 3, 24),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 06
              const obj06 = new Entity()
              obj06.addComponent(new BoxShape())
              obj06.addComponent(material001)
              obj06.addComponent(new Transform({
                  position: new Vector3(40, 3, 40),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 07
              const obj07 = new Entity()
              obj07.addComponent(new BoxShape())
              obj07.addComponent(material001)
              obj07.addComponent(new Transform({
                  position: new Vector3(56, 3, 8),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 08
              const obj08 = new Entity()
              obj08.addComponent(new BoxShape())
              obj08.addComponent(material001)
              obj08.addComponent(new Transform({
                  position: new Vector3(56, 3, 24),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 09
              const obj09 = new Entity()
              obj09.addComponent(new BoxShape())
              obj09.addComponent(material001)
              obj09.addComponent(new Transform({
                  position: new Vector3(56, 3, 40),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 10
              const obj10 = new Entity()
              obj10.addComponent(new BoxShape())
              obj10.addComponent(material001)
              obj10.addComponent(new Transform({
                  position: new Vector3(72, 3, 8),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 11
              const obj11 = new Entity()
              obj11.addComponent(new BoxShape())
              obj11.addComponent(material001)
              obj11.addComponent(new Transform({
                  position: new Vector3(72, 3, 24),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 12
              const obj12 = new Entity()
              obj12.addComponent(new BoxShape())
              obj12.addComponent(material001)
              obj12.addComponent(new Transform({
                  position: new Vector3(72, 3, 40),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 13
              const obj13 = new Entity()
              obj13.addComponent(new BoxShape())
              obj13.addComponent(material001)
              obj13.addComponent(new Transform({
                  position: new Vector3(88, 3, 8),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 14
              const obj14 = new Entity()
              obj14.addComponent(new BoxShape())
              obj14.addComponent(material001)
              obj14.addComponent(new Transform({
                  position: new Vector3(88, 3, 24),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))

              //Material Host 15
              const obj15 = new Entity()
              obj15.addComponent(new BoxShape())
              obj15.addComponent(material001)
              obj15.addComponent(new Transform({
                  position: new Vector3(88, 3, 40),
                  scale: new Vector3(4, 8, 4),
                  rotation: Quaternion.Euler(0, 0, 0)
                }))


  //set parent
  content02_2.setParent(state02_2)
  obj01.setParent(state02_2)
  obj02.setParent(state02_2)
  obj03.setParent(state02_2)
  obj04.setParent(state02_2)
  obj05.setParent(state02_2)
  obj06.setParent(state02_2)
  obj07.setParent(state02_2)
  obj08.setParent(state02_2)
  obj09.setParent(state02_2)
  obj10.setParent(state02_2)
  obj11.setParent(state02_2)
  obj12.setParent(state02_2)
  obj13.setParent(state02_2)
  obj14.setParent(state02_2)
  obj15.setParent(state02_2)


  //State 02_3
  let state02_3 = new Entity()
  state02_3.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state02_3),
          engine.removeEntity(state02_1),
          engine.removeEntity(state02_2)
        } else {
          engine.addEntity(state02_3)
        }
    })
  )

              //content 02_3
              let content02_3 = new Entity()
              content02_3.addComponent(new BoxShape())
              content02_3.getComponent(BoxShape).withCollisions = true
              content02_3.getComponent(BoxShape).visible = true
              content02_3.addComponent(material06)
              content02_3.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
              }))

//set parent
content02_3.setParent(state02_3)









//State 03_1
  let state03_1 = new Entity()
  state03_1.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state03_1),
          engine.removeEntity(state03_2),
          engine.removeEntity(state03_3)
        } else {
          engine.addEntity(state03_1)
        }
    })
  )
              //content 03_1
              let content03_1 = new Entity()
              content03_1.addComponent(new BoxShape())
              content03_1.getComponent(BoxShape).withCollisions = true
              content03_1.getComponent(BoxShape).visible = true
              content03_1.addComponent(material07)
              content03_1.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
              }))

  //set parent
  content03_1.setParent(state03_1)


  //State 03_2
  let state03_2 = new Entity()
  state03_2.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state03_2),
          engine.removeEntity(state03_1),
          engine.removeEntity(state03_3)
        } else {
          engine.addEntity(state03_2)
        }
    })
  )
              //content 03_2
              let content03_2 = new Entity()
              content03_2.addComponent(new BoxShape())
              content03_2.getComponent(BoxShape).withCollisions = true
              content03_2.getComponent(BoxShape).visible = true
              content03_2.addComponent(material08)
              content03_2.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
              }))

  //set parent
  content03_2.setParent(state03_2)

  //State 03_3
  let state03_3 = new Entity()
  state03_3.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
          engine.addEntity(state03_3),
          engine.removeEntity(state03_1),
          engine.removeEntity(state03_2)
        } else {
          engine.addEntity(state03_3)
        }
    })
  )

              //content 03_3
              let content03_3 = new Entity()
              content03_3.addComponent(new BoxShape())
              content03_3.getComponent(BoxShape).withCollisions = true
              content03_3.getComponent(BoxShape).visible = true
              content03_3.addComponent(material09)
              content03_3.addComponent(
                new Transform({
                  position: new Vector3(56, 0, 24),
                  scale: new Vector3(80, .0001, 48),
                  rotation: Quaternion.Euler(0, 0, 0)
              }))

//set parent
content03_3.setParent(state03_3)
