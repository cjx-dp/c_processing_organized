This section contains all functions relating to keyboard, mouse, and gamepad input.

# Table Of Contents
* [CP_Input_KeyTriggered](#CP_Input_KeyTriggered)
* [CP_Input_KeyReleased](#CP_Input_KeyReleased)
* [CP_Input_KeyDown](#CP_Input_KeyDown)
* [CP_Input_MouseTriggered](#CP_Input_MouseTriggered)
* [CP_Input_MouseReleased](#CP_Input_MouseReleased)
* [CP_Input_MouseDown](#CP_Input_MouseDown)
* [CP_Input_MouseMoved](#CP_Input_MouseMoved)
* [CP_Input_MouseClicked](#CP_Input_MouseClicked)
* [CP_Input_MouseDoubleClicked](#CP_Input_MouseDoubleClicked)
* [CP_Input_MouseDragged](#CP_Input_MouseDragged)
* [CP_Input_MouseWheel](#CP_Input_MouseWheel)
* [CP_Input_GetMouseX](#CP_Input_GetMouseX)
* [CP_Input_GetMouseY](#CP_Input_GetMouseY)
* [CP_Input_GetMousePreviousX](#CP_Input_GetMousePreviousX)
* [CP_Input_GetMousePreviousY](#CP_Input_GetMousePreviousY)
* [CP_Input_GetMouseDeltaX](#CP_Input_GetMouseDeltaX)
* [CP_Input_GetMouseDeltaY](#CP_Input_GetMouseDeltaY)
* [CP_Input_GetMouseWorldX](#CP_Input_GetMouseWorldX)
* [CP_Input_GetMouseWorldY](#CP_Input_GetMouseWorldY)
* [CP_Input_GamepadTriggered](#CP_Input_GamepadTriggered)
* [CP_Input_GamepadTriggeredAdvanced](#CP_Input_GamepadTriggeredAdvanced)
* [CP_Input_GamepadReleased](#CP_Input_GamepadReleased)
* [CP_Input_GamepadReleasedAdvanced](#CP_Input_GamepadReleasedAdvanced)
* [CP_Input_GamepadDown](#CP_Input_GamepadDown)
* [CP_Input_GamepadDownAdvanced](#CP_Input_GamepadDownAdvanced)
* [CP_Input_GamepadRightTrigger](#CP_Input_GamepadRightTrigger)
* [CP_Input_GamepadRightTriggerAdvanced](#CP_Input_GamepadRightTriggerAdvanced)
* [CP_Input_GamepadLeftTrigger](#CP_Input_GamepadLeftTrigger)
* [CP_Input_GamepadLeftTriggerAdvanced](#CP_Input_GamepadLeftTriggerAdvanced)
* [CP_Input_GamepadRightStick](#CP_Input_GamepadRightStick)
* [CP_Input_GamepadRightStickAdvanced](#CP_Input_GamepadRightStickAdvanced)
* [CP_Input_GamepadLeftStick](#CP_Input_GamepadLeftStick)
* [CP_Input_GamepadLeftStickAdvanced](#CP_Input_GamepadLeftStickAdvanced)
* [CP_Input_GamepadConnected](#CP_Input_GamepadConnected)
* [CP_Input_GamepadConnectedAdvanced](#CP_Sound_Load)

# CP_Input_KeyTriggered
Returns TRUE if the specified key was just pressed this frame. Returns FALSE otherwise, including when the key is held down.

## Function
```C
CP_BOOL CP_Input_KeyTriggered(CP_KEY keyCode);
```

### Parameters
* keyCode [CP_KEY](Types/#CP_KEY) - The key being checked.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if the key was pressed this frame, FALSE otherwise.

## Example
```C
void update()
{
    // If this is the first frame the spacebar is pressed
    if (CP_Input_KeyTriggered(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 192, 203, 255));
    }
    // If spacebar is being held
    else if (CP_Input_KeyDown(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(25, 180, 220, 255));
    }
    // If spacebar was just released
    else if (CP_Input_KeyReleased(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 128, 0, 255));
    }
    // Default state
    else
    {
        CP_Graphics_ClearBackground(CP_Color_Create(0, 0, 0, 255));
    }
}
```

## Related
* [CP_KEY](Types/#CP_KEY)
* [CP_BOOL](Types/#CP_BOOL)
* [CP_Input_KeyDown](Input/#CP_Input_KeyDown)
* [CP_Input_KeyReleased](Input/#CP_Input_KeyReleased)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_KeyReleased
Returns TRUE if the specified key was released this frame. Returns FALSE otherwise.

## Function
```C
CP_BOOL CP_Input_KeyReleased(CP_KEY keyCode);
```

### Parameters
* keyCode [CP_KEY](Types/#CP_KEY) - The key being checked.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if the key was just released, FALSE otherwise.

## Example
```C
void update()
{
    // If this is the first frame the spacebar is pressed
    if (CP_Input_KeyTriggered(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 192, 203, 255));
    }
    // If spacebar is being held
    else if (CP_Input_KeyDown(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(25, 180, 220, 255));
    }
    // If spacebar was just released
    else if (CP_Input_KeyReleased(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 128, 0, 255));
    }
    // Default state
    else
    {
        CP_Graphics_ClearBackground(CP_Color_Create(0, 0, 0, 255));
    }
}
```

## Related
* [CP_KEY](Types/#CP_KEY)
* [CP_BOOL](Types/#CP_BOOL)
* [CP_Input_KeyDown](Input/#CP_Input_KeyDown)
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_KeyDown
Returns TRUE if the specified key is down. Note: This is true on the first frame and any subsequent frames that the key may be held. Returns FALSE otherwise.

## Function
```C
CP_BOOL CP_Input_KeyDown(CP_KEY keyCode);
```

### Parameters
* keyCode [CP_KEY](Types/#CP_KEY) - The key being checked.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if the key is being held down, FALSE otherwise.

## Example
```C
void update()
{
    // If this is the first frame the spacebar is pressed
    if (CP_Input_KeyTriggered(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 192, 203, 255));
    }
    // If spacebar is being held
    else if (CP_Input_KeyDown(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(25, 180, 220, 255));
    }
    // If spacebar was just released
    else if (CP_Input_KeyReleased(KEY_SPACE))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 128, 0, 255));
    }
    // Default state
    else
    {
        CP_Graphics_ClearBackground(CP_Color_Create(0, 0, 0, 255));
    }
}
```

## Related
* [CP_KEY](Types/#CP_KEY)
* [CP_BOOL](Types/#CP_BOOL)
* [CP_Input_KeyReleased](Input/#CP_Input_KeyReleased)
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_MouseTriggered
Returns TRUE if the specified mouse button was pressed this frame. Returns FALSE otherwise, including when the button is held down.

## Function
```C
CP_BOOL CP_Input_MouseTriggered(CP_MOUSE button);
```

### Parameters
* button [CP_MOUSE](Types/#CP_MOUSE) - The mouse button being checked.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE when the button was just pressed, FALSE otherwise.

## Example
```C
void update()
{
    // If this is the first frame the left mouse button is pressed
    if (CP_Input_MouseTriggered(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 192, 203, 255));
    }
    // If left mouse button is being held
    else if (CP_Input_MouseDown(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(25, 180, 220, 255));
    }
    // If left mouse button was just released
    else if (CP_Input_MouseReleased(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 128, 0, 255));
    }
    // Default state
    else
    {
        CP_Graphics_ClearBackground(CP_Color_Create(0, 0, 0, 255));
    }
}
```

## Related
* [CP_MOUSE](Types/#CP_MOUSE)
* [CP_BOOL](Types/#CP_BOOL)
* [CP_Input_MouseDown](Input/#CP_Input_MouseDown)
* [CP_Input_MouseReleased](Input/#CP_Input_MouseReleased)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_MouseReleased
Returns TRUE if the specified mouse button was released this frame. Returns FALSE otherwise.

## Function
```C
CP_BOOL CP_Input_MouseReleased(CP_MOUSE button);
```

### Parameters
* button [CP_MOUSE](Types/#CP_MOUSE) - The mouse button being checked.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if the button was just released, otherwise FALSE.

## Example
```C
void update()
{
    // If this is the first frame the left mouse button is pressed
    if (CP_Input_MouseTriggered(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 192, 203, 255));
    }
    // If left mouse button is being held
    else if (CP_Input_MouseDown(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(25, 180, 220, 255));
    }
    // If left mouse button was just released
    else if (CP_Input_MouseReleased(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 128, 0, 255));
    }
    // Default state
    else
    {
        CP_Graphics_ClearBackground(CP_Color_Create(0, 0, 0, 255));
    }
}
```

## Related
* [CP_MOUSE](Types/#CP_MOUSE)
* [CP_BOOL](Types/#CP_BOOL)
* [CP_Input_MouseDown](Input/#CP_Input_MouseDown)
* [CP_Input_MouseTriggered](Input/#CP_Input_MouseTriggered)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_MouseDown
Returns TRUE if the mouse button is pressed. Note: This is true on the first frame and any subsequent frames the button remains pressed. Returns FALSE otherwise.

## Function
```C
CP_BOOL CP_Input_MouseDown(CP_MOUSE button);
```

### Parameters
* button [CP_MOUSE](Types/#CP_MOUSE) - The mouse button being checked.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE when the button is pressed, FALSE otherwise.

## Example
```C
void update()
{
    // If this is the first frame the left mouse button is pressed
    if (CP_Input_MouseTriggered(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 192, 203, 255));
    }
    // If left mouse button is being held
    else if (CP_Input_MouseDown(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(25, 180, 220, 255));
    }
    // If left mouse button was just released
    else if (CP_Input_MouseReleased(MOUSE_BUTTON_LEFT))
    {
        CP_Graphics_ClearBackground(CP_Color_Create(255, 128, 0, 255));
    }
    // Default state
    else
    {
        CP_Graphics_ClearBackground(CP_Color_Create(0, 0, 0, 255));
    }
}
```

## Related
* [CP_MOUSE](Types/#CP_MOUSE)
* [CP_BOOL](Types/#CP_BOOL)
* [CP_Input_MouseReleased](Input/#CP_Input_MouseReleased)
* [CP_Input_MouseTriggered](Input/#CP_Input_MouseTriggered)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_MouseMoved
This function returns TRUE if the mouse was moved since the last frame. Returns FALSE otherwise.

## Function
```C
CP_BOOL CP_Input_MouseMoved(void);
```

### Parameters
This function has no parameters.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if the mouse has been moved, FALSE otherwise.

## Example
```C
void update(void)
{
    if (CP_Input_MouseMoved())
    {
        CP_Graphics_ClearBackground(CP_Color_Create(0, 255, 0, 255));
    }
    else
    {
        CP_Graphics_ClearBackground(CP_Color_Create(0, 0, 255, 255));
    }
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_MouseClicked
This function returns TRUE if the left mouse button was **released** this frame. Returns FALSE otherwise.

## Function
```C
CP_Bool CP_Input_MouseClicked(void);
```

### Parameters
This function has no parameters.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if the left button was released, FALSE otherwise.

## Example
```C
CP_Color bgColor = CP_Color_Create(0, 255, 0, 255);

void update(void)
{
    // Get a random color for the background when the mouse is clicked
    if (CP_Input_MouseClicked())
    {
        bgColor = CP_Color_Create(CP_Random_RangeInt(0, 255), CP_Random_RangeInt(0, 255), CP_Random_RangeInt(0, 255), 255);
    }

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Random_RangeInt](Random/#CP_Random_RangeInt)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_MouseDoubleClicked
This function returns TRUE if the left mouse button has been double-clicked. Returns FALSE otherwise.

## Function
```C
CP_Bool CP_Input_MouseDoubleClicked(void);
```

### Parameters
This function has no parameters.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if the left button was double-clicked, FALSE otherwise.

## Example
```C
CP_Color bgColor = CP_Color_Create(0, 255, 0, 255);

void update(void)
{
    // Get a random color for the background when the mouse is double-clicked
    if (CP_Input_MouseDoubleClicked())
    {
        bgColor = CP_Color_Create(CP_Random_RangeInt(0, 255), CP_Random_RangeInt(0, 255), CP_Random_RangeInt(0, 255), 255);
    }

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Random_RangeInt](Random/#CP_Random_RangeInt)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_MouseDragged
This function returns TRUE if the specified mouse button is being held while the mouse is also moved. Returns FALSE otherwise.

## Function
```C
CP_Bool CP_Input_MouseDragged(CP_Mouse button);
```

### Parameters
* button [CP_MOUSE](Types/#CP_MOUSE) - The mouse button being checked.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if the specified button is held and moved, FALSE otherwise.

## Example
```C
float delta = 0.0f;

void update(void)
{
    if (CP_Input_MouseDragged(MOUSE_BUTTON_LEFT))
    {
        if (CP_Input_GetMouseDeltaX() < 0.0f)
        {
            delta -= 5.0f;
        }
        else
        {
            delta += 5.0f;
        }
    }

    CP_Settings_Background(CP_Color_Create(255, 255, 255, 255));
    CP_Graphics_DrawCircle(CP_System_GetWindowWidth() / 2.0f + delta, (float)CP_System_GetWindowHeight() / 2.0f, 4.0f);
}
```

## Related
* [CP_MOUSE](Types/#CP_MOUSE)
* [CP_Settings_Background](Settings/#CP_Settings_Background)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_DrawCircle](Graphics/#CP_Graphics_DrawCircle)
* [CP_System_GetWindowWidth](System/#CP_System_GetWindowWidth)
* [CP_System_GetWindowHeight](System/#CP_System_GetWindowHeight)

# CP_Input_MouseWheel
Returns the change in y position of the mouse wheel for the frame.

## Function
```C
float CP_Input_MouseWheel(void);
```

### Parameters
This function has no parameters.

### Return
* float - The mouse wheel change since last frame.

## Example
```C
float prevMouseWheel = 0.0f;
CP_Color bgColor = CP_Color_Create(62, 157, 189, 255);

void update(void)
{
    float newMouseWheel = CP_Input_MouseWheel();
    if (newMouseWheel > prevMouseWheel)
    {
        bgColor.a += 1;
    }
    else if (newMouseWheel < prevMouseWheel)
    {
        bgColor.a -= 1;
    }

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_GetMouseX
This function returns the current horizontal coordinate of the mouse. This will track the position of the mouse anywhere on the screen, even if the window is in the background.

## Function
```C
float CP_Input_GetMouseX(void);
```

### Parameters
This function has no parameters.

### Return
* float - The current X position of the mouse.

## Example
```C
void draw()
{
    CP_Graphics_ClearBackground(CP_Color_Create(200, 200, 200, 255));
    CP_Graphics_DrawLine(CP_Input_GetMouseX(), 20, CP_Input_GetMouseX(), 80);
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_DrawLine](Graphics/#CP_Graphics_DrawLine)

# CP_Input_GetMouseY
This function returns the current vertical coordinate of the mouse. This will track the position of the mouse anywhere on the screen, even if the window is in the background.

## Function
```C
float CP_Input_GetMouseY(void);
```

### Parameters
This function has no parameters.

### Return
* float - The current Y position of the mouse.

## Example
```C
void draw()
{
    CP_Graphics_ClearBackground(CP_Color_Create(200, 200, 200, 255));
    CP_Graphics_DrawLine(20, CP_Input_GetMouseY(), 80, CP_Input_GetMouseY());
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_DrawLine](Graphics/#CP_Graphics_DrawLine)

# CP_Input_GetMousePreviousX
This function always returns the previous horizontal coordinate of the mouse. This value will be the same as [CP_Input_GetMouseX](#CP_Input_GetMouseX) the previous frame. This will track the position of the mouse anywhere on the screen, even if the window is in the background.

## Function
```C
float CP_Input_GetMousePreviousX(void);
```

### Parameters
This function has no parameters.

### Return
* float - The X position of the mouse on the previous frame.

## Example
```C
void draw()
{
    CP_Graphics_ClearBackground(CP_Color_Create(200, 200, 200, 255));
    CP_Graphics_DrawLine(CP_Input_GetMouseX(), CP_Input_GetMouseY(), CP_Input_GetMousePreviousX(), CP_Input_GetMousePreviousY());
}
```

## Related
* [CP_Input_GetMouseX](Input/#CP_Input_GetMouseX)
* [CP_Input_GetMouseY](Input/#CP_Input_GetMouseY)
* [CP_Input_GetMousePreviousY](Input/#CP_Input_GetMousePreviousY)
* [CP_Graphics_DrawLine](Graphics/#CP_Graphics_DrawLine)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_GetMousePreviousY
This function always returns the previous vertical coordinate of the mouse. This value will be the same as [CP_Input_GetMouseY](#CP_Input_GetMouseY) the previous frame. This will track the position of the mouse anywhere on the screen, even if the window is in the background.

## Function
```C
float CP_Input_GetMousePreviousY(void);
```

### Parameters
This function has no parameters.

### Return
* float - The Y position of the mouse on the previous frame.

## Example
```C
void draw()
{
    CP_Graphics_ClearBackground(CP_Color_Create(200, 200, 200, 255));
    CP_Graphics_DrawLine(CP_Input_GetMouseX(), CP_Input_GetMouseY(), CP_Input_GetMousePreviousX(), CP_Input_GetMousePreviousY());
}
```

## Related
* [CP_Input_GetMouseX](Input/#CP_Input_GetMouseX)
* [CP_Input_GetMouseY](Input/#CP_Input_GetMouseY)
* [CP_Input_GetMousePreviousX](Input/#CP_Input_GetMousePreviousX)
* [CP_Graphics_DrawLine](Graphics/#CP_Graphics_DrawLine)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_GetMouseDeltaX
This function returns the difference between the mouse's horizontal coordinate on the previous frame and on this frame.

## Function
```C
float CP_Input_GetMouseDeltaX(void);
```

### Parameters
This function has no parameters.

### Return
* float - The difference in the X position from the previous frame.

## Example
```C
float horizontalChange = CP_Input_GetMouseDeltaX();
```

## Related
* [CP_Input_GetMouseDeltaY](#CP_Input_GetMouseDeltaY)

# CP_Input_GetMouseDeltaY
This function returns the difference between the mouse's vertical coordinate on the previous frame and on this frame.

## Function
```C
float CP_Input_GetMouseDeltaY(void);
```

### Parameters
This function has no parameters.

### Return
* float - The difference in the Y position from the previous frame.

## Example
```C
float verticalChange = CP_Input_GetMouseDeltaY();
```

## Related
* [CP_Input_GetMouseDeltaX](#CP_Input_GetMouseDeltaX)

# CP_Input_GetMouseWorldX
Returns the current horizontal coordinate of the mouse in world space. This means that the mouse position will be translated by any transformation functions called ([CP_Settings_Translate](Settings/#CP_Settings_Translate), [CP_Settings_Scale](Settings/#CP_Settings_Scale), [CP_Settings_Rotate](Settings/#CP_Settings_Rotate)). This will track the position of the mouse anywhere on the screen, even if the window is in the background.

## Function
```C
float CP_Input_GetMouseWorldX(void);
```

### Parameters
This function has no parameters.

### Return
* float - The X position of the mouse in world space.

## Example
```C
void draw()
{
    CP_Graphics_ClearBackground(CP_Color_Create(200, 200, 200, 255));
    CP_Settings_Translate(CP_Input_GetMouseX(), CP_Input_GetMouseY());
    CP_Graphics_DrawLine(0, 0, CP_Input_GetMouseWorldX(), CP_Input_GetMouseWorldY());
}
```

## Related
* [CP_Input_GetMouseX](Input/#CP_Input_GetMouseX)
* [CP_Input_GetMouseY](Input/#CP_Input_GetMouseY)
* [CP_Input_GetMouseWorldY](Input/#CP_Input_GetMouseWorldY)
* [CP_Settings_Translate](Settings/#CP_Settings_Translate)
* [CP_Graphics_DrawLine](Graphics/#CP_Graphics_DrawLine)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_GetMouseWorldY
Returns the current vertical coordinate of the mouse in world space. This means that the mouse position will be translated by any transformation functions called ([CP_Settings_Translate](Settings/#CP_Settings_Translate), [CP_Settings_Scale](Settings/#CP_Settings_Scale), [CP_Settings_Rotate](Settings/#CP_Settings_Rotate)). This will track the position of the mouse anywhere on the screen, even if the window is in the background.

## Function
```C
float CP_Input_GetMouseWorldX(void);
```

### Parameters
This function has no parameters.

### Return
* float - The Y position of the mouse in world space.

## Example
```C
void draw()
{
    CP_Graphics_ClearBackground(CP_Color_Create(200, 200, 200, 255));
    CP_Settings_Translate(CP_Input_GetMouseX(), CP_Input_GetMouseY());
    CP_Graphics_DrawLine(0, 0, CP_Input_GetMouseWorldX(), CP_Input_GetMouseWorldY());
}
```

## Related
* [CP_Input_GetMouseX](Input/#CP_Input_GetMouseX)
* [CP_Input_GetMouseY](Input/#CP_Input_GetMouseY)
* [CP_Input_GetMouseWorldX](Input/#CP_Input_GetMouseWorldX)
* [CP_Settings_Translate](Settings/#CP_Settings_Translate)
* [CP_Graphics_DrawLine](Graphics/#CP_Graphics_DrawLine)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Input_GamepadTriggered
This function returns TRUE when the specified gamepad button has been pressed on this frame but was not pressed on the previous frame. Returns FALSE otherwise.

## Function
```C
CP_BOOL CP_Input_GamepadTriggered(CP_GAMEPAD button);
```

### Parameters
* button ([CP_GAMEPAD](Types/#CP_GAMEPAD)) - The enum value corresponding to the button you want to check.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE when the button was initially pressed, FALSE otherwise.

## Example
```C
void update()
{
    CP_Color bgColor = CP_Color_Create(255, 0, 0, 255);

    if (CP_Input_GamepadTriggered(GAMEPAD_A))
        bgColor = CP_Color_Create(0, 0, 255, 255);

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color](Types/#CP_Color)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)


# CP_Input_GamepadTriggeredAdvanced
Allows you to specify the index for a specific gamepad to check. This index should be from 0 to 3 (indexes outside this range will cause the function to return FALSE). The behavior is otherwise the same as [CP_Input_GamepadTriggered](Input/#CP_Input_GamepadTriggered).

## Function
```C
CP_BOOL CP_Input_GamepadTriggeredAdvanced(CP_GAMEPAD button, int gamepadIndex);
```

### Parameters
* button ([CP_GAMEPAD](Types/#CP_GAMEPAD)) - The enum value corresponding to the button you want to check.
* gamepadIndex (int) - The index of the gamepad to check.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE when the specified button on the specified gamepad is triggered, FALSE otherwise.

## Example
```C
void update()
{
    CP_Color bgColor = CP_Color_Create(255, 0, 0, 255);

    if (CP_Input_GamepadTriggeredAdvanced(GAMEPAD_A, 0))
        bgColor = CP_Color_Create(0, 0, 255, 255);

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color](Types/#CP_Color)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_GamepadReleased
This function returns TRUE when the specified button was pressed on the previous frame and is not pressed on this frame. Returns FALSE otherwise.

## Function
```C
CP_BOOL CP_Input_GamepadReleased(CP_GAMEPAD button);
```

### Parameters
* button ([CP_GAMEPAD](Types/#CP_GAMEPAD)) - The enum value corresponding to the button you want to check.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE when the button is released, FALSE otherwise.

## Example
```C
CP_Color bgColor = CP_Color_Create(255, 0, 0, 255);

void update()
{
    if (CP_Input_GamepadTriggered(GAMEPAD_X))
        bgColor = CP_Color_Create(0, 0, 255, 255);
    else if (CP_Input_GamepadReleased(GAMEPAD_X))
        bgColor = CP_Color_Create(0, 255, 0, 255);

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color](Types/#CP_Color)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Input_GamepadTriggered](Input/#CP_Input_GamepadTriggered)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_GamepadReleasedAdvanced
Allows you to specify the index for a specific gamepad to check. This index should be from 0 to 3 (indexes outside this range will cause the function to return FALSE). The behavior is otherwise the same as [CP_Input_GamepadReleased](Input/#CP_Input_GamepadReleased).

## Function
```C
CP_BOOL CP_Input_GamepadReleasedAdvanced(CP_GAMEPAD button, int gamepadIndex);
```

### Parameters
* button ([CP_GAMEPAD](Types/#CP_GAMEPAD)) - The enum value corresponding to the button you want to check.
* gamepadIndex (int) - The index of the gamepad to check.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE when the specified button and gamepad is released, FALSE otherwise.

## Example
```C
CP_Color bgColor = CP_Color_Create(255, 0, 0, 255);

void update()
{
    if (CP_Input_GamepadTriggeredAdvanced(GAMEPAD_X, 1))
        bgColor = CP_Color_Create(0, 0, 255, 255);
    else if (CP_Input_GamepadReleasedAdvanced(GAMEPAD_X, 1))
        bgColor = CP_Color_Create(0, 255, 0, 255);

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color](Types/#CP_Color)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Input_GamepadTriggeredAdvanced](Input/#CP_Input_GamepadTriggeredAdvanced)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_GamepadDown
This function returns TRUE when the specified gamepad button is pressed. It will continue to return TRUE as long as the button is held down. Returns FALSE otherwise.

## Function
```C
CP_BOOL CP_Input_GamepadDown(CP_GAMEPAD button);
```

### Parameters
* button ([CP_GAMEPAD](Types/#CP_GAMEPAD)) - The enum value corresponding to the button you want to check.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE when the button is held down, FALSE otherwise.

## Example
```C
void update()
{
    CP_Color bgColor;
    if (CP_Input_GamepadDown(GAMEPAD_A))
        bgColor = CP_Color_Create(18, 104, 107, 255);
    else
        bgColor = CP_Color_Create(166, 235, 237, 255);

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color](Types/#CP_Color)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_GamepadDownAdvanced
Allows you to specify the index for a specific gamepad to check. This index should be from 0 to 3 (indexes outside this range will cause the function to return FALSE). The behavior is otherwise the same as [CP_Input_GamepadDown](Input/#CP_Input_GamepadDown).

## Function
```C
CP_BOOL CP_Input_GamepadDownAdvanced(CP_GAMEPAD button, int gamepadIndex);
```

### Parameters
* button ([CP_GAMEPAD](Types/#CP_GAMEPAD)) - The enum value corresponding to the button you want to check.
* gamepadIndex (int) - The index of the gamepad to check.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE when the specified button and gamepad is held down, FALSE otherwise.

## Example
```C
void update()
{
    CP_Color bgColor;
    if (CP_Input_GamepadDownAdvanced(GAMEPAD_A, 2))
        bgColor = CP_Color_Create(18, 104, 107, 255);
    else
        bgColor = CP_Color_Create(166, 235, 237, 255);

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Color](Types/#CP_Color)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_GamepadRightTrigger
Returns the current value from the gamepad's right trigger.

## Function
```C
float CP_Input_GamepadRightTrigger(void);
```

### Parameters
This function has no parameters.

### Return
* float - The right trigger value.

## Example
```C

```

## Related

# CP_Input_GamepadRightTriggerAdvanced
Allows you to specify the index for a specific gamepad to check. This index should be from 0 to 3 (indexes outside this range will cause the function to return 0). The behavior is otherwise the same as [CP_Input_GamepadRightTrigger](Input/#CP_Input_GamepadRightTrigger).

## Function
```C
float CP_Input_GamepadRightTriggerAdvanced(int gamepadIndex);
```

### Parameters
* button (int) - The index of the gamepad you want to check.

### Return
* float - The value of the right trigger on the specified gamepad.

## Example
```C

```

## Related

# CP_Input_GamepadLeftTrigger
Returns the current value from the gamepad's left trigger.

## Function
```C
float CP_Input_GamepadLeftTrigger(void);
```

### Parameters
This function has no parameters.

### Return
* float - The left trigger value.

## Example
```C

```

## Related

# CP_Input_GamepadLeftTriggerAdvanced
Allows you to specify the index for a specific gamepad to check. This index should be from 0 to 3 (indexes outside this range will cause the function to return 0). The behavior is otherwise the same as [CP_Input_GamepadLeftTrigger](Input/#CP_Input_GamepadLeftTrigger).

## Function
```C
float CP_Input_GamepadLeftTriggerAdvanced(int gamepadIndex);
```

### Parameters
* button (int) - The index of the gamepad you want to check.

### Return
* float - The value of the left trigger on the specified gamepad.

## Example
```C

```

## Related

# CP_Input_GamepadRightStick
Returns a [CP_Vector](Types/#CP_Vector) with the current X and Y position values from the gamepad's right stick.

## Function
```C
CP_Vector CP_Input_GamepadRightStick(void);
```

### Parameters
This function has no parameters.

### Return
* [CP_Vector](Types/#CP_Vector) - The right stick X and Y values.

## Example
```C

```

## Related

# CP_Input_GamepadRightStickAdvanced
Allows you to specify the index for a specific gamepad to check. This index should be from 0 to 3 (indexes outside this range will cause the function to return zeroes). The behavior is otherwise the same as [CP_Input_GamepadRightStick](Input/#CP_Input_GamepadRightStick).

## Function
```C
CP_Vector CP_Input_GamepadRightStickAdvanced(int gamepadIndex);
```

### Parameters
* button (int) - The index of the gamepad you want to check.

### Return
* [CP_Vector](Types/#CP_Vector) - The right stick X and Y values on the specified gamepad.

## Example
```C

```

## Related

# CP_Input_GamepadLeftStick
Returns a [CP_Vector](Types/#CP_Vector) with the current X and Y position values from the gamepad's left stick.

## Function
```C
CP_Vector CP_Input_GamepadLeftStick(void);
```

### Parameters
This function has no parameters.

### Return
* [CP_Vector](Types/#CP_Vector) - The left stick X and Y values.

## Example
```C

```

## Related

# CP_Input_GamepadLeftStickAdvanced
Allows you to specify the index for a specific gamepad to check. This index should be from 0 to 3 (indexes outside this range will cause the function to return zeroes). The behavior is otherwise the same as [CP_Input_GamepadLeftStick](Input/#CP_Input_GamepadLeftStick).

## Function
```C
CP_Vector CP_Input_GamepadLeftStickAdvanced(int gamepadIndex);
```

### Parameters
* button (int) - The index of the gamepad you want to check.

### Return
* [CP_Vector](Types/#CP_Vector) - The left stick X and Y values on the specified gamepad.

## Example
```C

```

## Related

# CP_Input_GamepadConnected
Returns TRUE if there is a gamepad connected, and FALSE if there is not.

## Function
```C
CP_BOOL CP_Input_GamepadConnected(void);
```

### Parameters
This function has no parameters.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if a gamepad is connected, FALSE if not.

## Example
```C
void update()
{
    CP_Color bgColor;
    if (CP_Input_GamepadConnected() && CP_Input_GamepadDown(GAMEPAD_A))
        bgColor = CP_Color_Create(18, 104, 107, 255);
    else if (CP_Input_KeyDown(KEY_A))
        bgColor = CP_Color_Create(18, 104, 107, 255);
    else
        bgColor = CP_Color_Create(166, 235, 237, 255);

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Input_GamepadDown](Input/#CP_Input_GamepadDown)
* [CP_Input_KeyDown](Input/#CP_Input_KeyDown)
* [CP_Color](Types/#CP_Color)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)

# CP_Input_GamepadConnectedAdvanced
Returns TRUE if there is a gamepad connected at the specified index, and FALSE if there is not.

## Function
```C
CP_BOOL CP_Input_GamepadConnectedAdvanced(int gamepadIndex);
```

### Parameters
* button (int) - The index of the gamepad you want to check for.

### Return
* [CP_BOOL](Types/#CP_BOOL) - Will be TRUE if there is a gamepad connected at the specified index, FALSE otherwise.

## Example
```C
void update()
{
    CP_Color bgColor;
    if (CP_Input_GamepadConnectedAdvanced(0) && CP_Input_GamepadDownAdvanced(GAMEPAD_A, 0))
        bgColor = CP_Color_Create(18, 104, 107, 255);
    else if (CP_Input_KeyDown(KEY_A))
        bgColor = CP_Color_Create(18, 104, 107, 255);
    else
        bgColor = CP_Color_Create(166, 235, 237, 255);

    CP_Graphics_ClearBackground(bgColor);
}
```

## Related
* [CP_Input_GamepadDownAdvanced](Input/#CP_Input_GamepadDownAdvanced)
* [CP_Input_KeyDown](Input/#CP_Input_KeyDown)
* [CP_Color](Types/#CP_Color)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
