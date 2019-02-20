-- <%= title %>
-- © <%= now.getFullYear() %> <%= author %>

function onAddOnLoaded(eventCode, addOnName)
    if addOnName ~= "<%= name %>" then
        return nil
    end

    -- Your code goes here...
end)
EVENT_MANAGER:RegisterForEvent("<%= name %>", EVENT_ADD_ON_LOADED, onAddOnLoaded)